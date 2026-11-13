/* ============================================================
   Rate limit por IP da ViaBlack (Vercel Routing Middleware).
   Segurança básica contra abuso e raspagem: conta acessos à página e aos
   arquivos de dados (produtos.js, config.js). Imagens não contam.

   Usa o Upstash Redis do time pela API REST (sem dependências), com prefixo
   próprio. Sem KV_REST_API_URL/KV_REST_API_TOKEN, ou se o Redis não responder,
   deixa passar: a campanha nunca sai do ar por causa do limitador.
   ============================================================ */

const LIMITES = [
  { nome: "min", janela: 60, max: 60 }, // rajadas
  { nome: "dia", janela: 86400, max: 600 }, // raspagem lenta
];

export const config = {
  matcher: ["/", "/index.html", "/produtos.js", "/config.js"],
};

function ipDe(request) {
  const encaminhado = request.headers.get("x-forwarded-for");
  return (encaminhado && encaminhado.split(",")[0].trim()) || request.headers.get("x-real-ip") || "desconhecido";
}

export default async function middleware(request) {
  const url = process.env.KV_REST_API_URL;
  const token = process.env.KV_REST_API_TOKEN;
  if (!url || !token) return;

  const ip = ipDe(request);
  const agora = Math.floor(Date.now() / 1000);
  const chaves = LIMITES.map((l) => `viablack:rl:${l.nome}:${ip}:${Math.floor(agora / l.janela)}`);
  const comandos = LIMITES.flatMap((l, i) => [
    ["INCR", chaves[i]],
    ["EXPIRE", chaves[i], String(l.janela), "NX"],
  ]);

  try {
    const resp = await fetch(`${url}/pipeline`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify(comandos),
      signal: AbortSignal.timeout(800),
    });
    if (!resp.ok) return;
    const resultados = await resp.json();

    for (let i = 0; i < LIMITES.length; i++) {
      const contagem = Number(resultados[i * 2] && resultados[i * 2].result);
      const l = LIMITES[i];
      if (contagem > l.max) {
        const espera = l.janela - (agora % l.janela);
        return new Response("Muitas requisições. Tente novamente em instantes.", {
          status: 429,
          headers: {
            "Retry-After": String(espera),
            "Content-Type": "text/plain; charset=utf-8",
            "Cache-Control": "no-store",
          },
        });
      }
    }
  } catch {
    // Redis fora do ar ou lento: deixa passar.
  }
}

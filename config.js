/* ============================================================
   CONFIGURAÇÃO DA VIABLACK — é só este arquivo que muda no dia a dia.
   whatsapp: só dígitos, com 55 + DDD. Vazio = o WhatsApp abre pedindo para a
   pessoa escolher o contato.
   ============================================================ */
window.VIABLACK = {
  // Fim da campanha, no horário de Brasília (-03:00).
  fim: "2026-11-27T23:59:59-03:00",

  // Vai no fim da mensagem do WhatsApp, para o vendedor saber de onde veio.
  origem: "Landing page ViaBlack 2026",

  /* Quem recebe quem ainda NÃO é cliente (e o cliente que não lembra o vendedor).
     O visitante não vê o nome: a página divide meio a meio, sorteando um por
     visitante e mantendo o mesmo nas próximas visitas daquele aparelho. */
  novosClientes: [
    { nome: "Ricardo Lemos", whatsapp: "5519996427927" },
    { nome: "Gabrielle Murakami", whatsapp: "5519998800719" },
  ],

  /* Vendedores da tela "Quem é o seu vendedor?" (contatos de 13/11/2026).
     local aparece ao lado do nome, para diferenciar homônimos. */
  vendedores: [
    { nome: "Adriana Aquino", local: "Campinas SP", whatsapp: "5519990183292" },
    { nome: "Adriana da Silva Santos", local: "São Caetano do Sul SP", whatsapp: "5519971648357" },
    { nome: "Alexandre N de Viveiros", local: "", whatsapp: "5519996530337" },
    { nome: "Ana Paula Aparecida Silva", local: "Belo Horizonte MG", whatsapp: "553195159542" },
    { nome: "Andressa Felipe", local: "Campinas SP", whatsapp: "5519971503934" },
    { nome: "Arthur Matsubara", local: "Londrina PR", whatsapp: "554388645756" },
    { nome: "Camilla Alves Silveira", local: "Belo Horizonte MG", whatsapp: "553192733076" },
    { nome: "Carla Cristina Gonçalves", local: "Campinas SP", whatsapp: "5519999093637" },
    { nome: "Dalila Coelho Braz", local: "", whatsapp: "5511930696689" },
    { nome: "Danilo Delai", local: "Londrina PR", whatsapp: "554484273455" },
    { nome: "Dayane T de Lima", local: "Campinas SP", whatsapp: "5519998616277" },
    { nome: "Elemar", local: "", whatsapp: "554599640918" },
    { nome: "Evelyn Martins", local: "Belo Horizonte MG", whatsapp: "553195396832" },
    { nome: "Fabiana Silva", local: "São Caetano do Sul SP", whatsapp: "5511942454201" },
    { nome: "Fernanda Rafaela Lozovey Buzato", local: "Itajaí SC", whatsapp: "554791084010" },
    { nome: "Gabriele Aparecida Gonçalves Mazzega", local: "Belo Horizonte MG", whatsapp: "553197498446" },
    // Mesmo número da Gabrielle de novosClientes (no arquivo de contatos vinha só "Gabriele").
    { nome: "Gabrielle Murakami", local: "São Caetano do Sul SP", whatsapp: "5519998800719" },
    { nome: "Giovanna Maia Scoralick Rodrigues", local: "Belo Horizonte MG", whatsapp: "553197082194" },
    { nome: "Grazielle Jastrenski Carvalho", local: "São Caetano do Sul SP", whatsapp: "5511974863142" },
    { nome: "Gustavo", local: "Londrina PR", whatsapp: "554399769317" },
    { nome: "Heloisa Pereira", local: "Campinas SP", whatsapp: "5519991233598" },
    { nome: "Isabela Capello", local: "", whatsapp: "5519996058807" },
    { nome: "Jessica Eziquiel", local: "Campinas SP", whatsapp: "5519971660887" },
    { nome: "João Henrique", local: "Itajaí SC", whatsapp: "554791192768" },
    { nome: "Jonathan Galdino", local: "Campinas SP", whatsapp: "554330244701" },
    { nome: "Joseane Rodrigues Soares", local: "Londrina PR", whatsapp: "554497486038" },
    { nome: "Julia de Jesus Oliveira", local: "Belo Horizonte MG", whatsapp: "553172114381" },
    { nome: "Katia Lima Juliani", local: "São Caetano do Sul SP", whatsapp: "5517997688381" },
    { nome: "Kelly Cristina Gonçalves dos Santos", local: "Belo Horizonte MG", whatsapp: "553196490679" },
    { nome: "Lilian", local: "São Caetano do Sul SP", whatsapp: "5511950463350" },
    { nome: "Marcelo Silva Carneiro", local: "", whatsapp: "5519953215802" },
    { nome: "Maria Gabriela Miranda", local: "Londrina PR", whatsapp: "554399669317" },
    { nome: "Marina Priori", local: "", whatsapp: "5519993898938" },
    { nome: "Patricia", local: "", whatsapp: "5519991178257" },
    { nome: "Patrícia da Costa", local: "", whatsapp: "5519992151278" },
    { nome: "Renata Costa", local: "Campinas SP", whatsapp: "5519999291209" },
    { nome: "Richardson Robson Soares de Jesus", local: "Belo Horizonte MG", whatsapp: "553185626173" },
    { nome: "Rodrigo M", local: "", whatsapp: "553299529987" },
    { nome: "Sandra", local: "Campinas SP", whatsapp: "5519997376403" },
    { nome: "Sheila Cristina da Silva", local: "São Caetano do Sul SP", whatsapp: "5519999176420" },
    { nome: "Stephany Souza", local: "Campinas SP", whatsapp: "5519999828524" },
    { nome: "Thaiz Santos", local: "Belo Horizonte MG", whatsapp: "553190864654" },
    { nome: "Vanessa Lemos", local: "Campinas SP", whatsapp: "5511921898491" },
    { nome: "Vivian Cardelli", local: "Campinas SP", whatsapp: "5519991863880" },
    { nome: "Walkiria Regiane Bernardo", local: "Campinas SP", whatsapp: "5519998578778" },
    { nome: "Wenderson", local: "", whatsapp: "553195503232" },
  ],
};

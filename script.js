
const modal = document.querySelector(".modal");

const imagem = document.getElementById("modal-imagem");

const titulo = document.getElementById("modal-titulo");

const descricao = document.getElementById("modal-descricao");

const preco = document.getElementById("modal-preco");

const cidade = document.getElementById("modal-cidade");

const tipologia = document.getElementById("modal-tipologia");

const area = document.getElementById("modal-area");

const quartos = document.getElementById("modal-quartos");

const casasDeBanho = document.getElementById("modal-casasDeBanho");

const garagem = document.getElementById("modal-garagem");

const certificacaoEnergetica = document.getElementById("modal-certificacaoEnergetica");

const mobiliado = document.getElementById("modal-mobiliado");

const detalhes = document.getElementById("modal-detalhes");

const botaoFechar = document.querySelector(".fechar");



const botoesDetalhes = document.querySelectorAll(".btn-detalhes");

const imoveis = [
  {
    titulo: "Apartamento em Óbidos",
    descricao: "Apartamento T2 situado na vila histórica de Óbidos, a poucos minutos do castelo e do comércio local. Dispõe de dois quartos, uma casa de banho, cozinha equipada, sala ampla e varanda com vista desafogada. Excelente opção para habitação própria ou investimento.",
    preco: "€250.000",
    imagem: "assets/imagem/portugal800.jpg",
    cidade: "Óbidos",
    tipologia: "T2",
    estado: "Venda",
    area: "92 m²",
    quartos: 2,
    casasDeBanho: 1,
    garagem: "Sim",
    certificacaoEnergetica: "Classe B",
    mobiliado: "Não",
  },

  {
    titulo: "Moradia em Viseu",
    descricao: "Moradia T2 localizada numa zona residencial tranquila de Viseu. Encontra-se totalmente mobilada e dispõe de duas casas de banho, cozinha equipada, sala de estar espaçosa e garagem privativa. Próxima de escolas, supermercados e acessos principais.",
    preco: "€180.000",
    imagem: "assets/imagem/portugal2-800.jpg",
    cidade: "Viseu",
    tipologia: "T2",
    estado: "Venda",
    area: "118 m²",
    mobiliado: "Não",
  },

  {
    titulo: "Apartamento em Coimbra",
    descricao: "Apartamento T3 para arrendamento, inserido numa excelente localização, junto a universidades, serviços e comércio. Possui uma casa de banho, cozinha funcional, boa exposição solar e fácil acesso aos transportes públicos.",
    preco: "2 rendas + €780",
    imagem: "assets/imagem/portugal3-800.jpg",
    cidade: "Coimbra",
    tipologia: "T3",
    estado: "Arrendamento",
    area: "105 m²",
    quartos: 2,
    casasDeBanho: 2,
    garagem: "Sim",
    certificacaoEnergetica: "Classe C",
    mobiliado: "Sim",
  },

  {
    titulo: "Moradia em Oliveira de Frades - Viseu",
    descricao: "Moradia T2+1 ideal para famílias, situada numa zona calma e de fácil acesso. Dispõe de uma casa de banho, cozinha espaçosa, sala confortável e área exterior. Localiza-se próxima de escolas, comércio e serviços essenciais.",
    preco: "€135.000",
    imagem: "assets/imagem/portugal4-800.jpg",
    cidade: "Oliveira de Frades - Viseu",
    tipologia: "T2+1",
    estado: "Venda",
    area: "132 m²",
    quartos: 3,
    casasDeBanho: 1,
    garagem: "Sim",
    certificacaoEnergetica: "Classe D",
    mobiliado: "Não",
  },

  {
    titulo: "Apartamento no Porto",
    descricao: "Apartamento T2 para arrendamento no centro do Porto. Conta com uma casa de banho, varandas, boa luminosidade natural e acabamentos modernos. Excelente localização, perto de estações de metro, comércio e zonas de lazer.",
    preco: "€900 / mês",
    imagem: "assets/imagem/portugal5-800.jpg",
    cidade: "Porto",
    tipologia: "T2",
    estado: "Arrendamento",
    area: "88 m²",
    quartos: 2,
    casasDeBanho: 1,
    garagem: "Não",
    certificacaoEnergetica: "Classe A",
    mobiliado: "Sim",
  },

  {
    titulo: "Casa em Aveiro",
    descricao: "Casa costeira de estilo tradicional, ideal para férias ou estadias de curta duração. Dispõe de dois quartos, uma casa de banho, cozinha equipada e vista privilegiada para a ria. Localizada junto ao comércio local e aos principais pontos turísticos da cidade.",
    preco: "€90 / noite",
    imagem: "assets/imagem/aveiro-800.jpg",
    cidade: "Aveiro",
    tipologia: "T2",
    estado: "Alojamento Local",
    area: "76 m²",
    quartos: 2,
    casasDeBanho: 1,
    garagem: "Não",
    certificacaoEnergetica: "Classe B",
    mobiliado: "Sim",
  },

];



botaoFechar.addEventListener("click", function(){

  modal.style.display = "none";

});


botoesDetalhes.forEach(function(botao, indice)

{

  /*evento de clique */
  botao.addEventListener("click", function(){

     const imovel = imoveis[indice];

     imagem.src = imovel.imagem;
     titulo.textContent = imovel.titulo;
     descricao.textContent = imovel.descricao;
     preco.textContent = imovel.preco;


     detalhes.innerHTML =  `
      <p>📍 Cidade: ${imovel.cidade}</p>
      <p>🏠 Tipologia: ${imovel.tipologia}</p>
      <p>💰 Preço: ${imovel.preco}</p>
      <p>📐 Área: ${imovel.area}</p>
      <P>🛏️ Quartos: ${imovel.quartos}</p>
      <p>🚿 Casas de banho: ${imovel.casasDeBanho}</p>
      <p>🚗 Garagem: ${imovel.garagem}</p>
      <p>⚡ Certificação energética: ${imovel.certificacaoEnergetica}</p>
      <p>🛋️ Mobiliado: ${imovel.mobiliado}</p>
     
     `;


     modal.style.display = "flex";

  });

});


document.addEventListener("keydown", function(event){

    if(event.key === "Escape"){

        modal.style.display = "none";

    }

});








import inflacao from '../listaDeDados/listaDeInflacoes.js';

const opcaoDois = (arr) => {

  for (let dadosInflacao of arr) {
    console.log(`
    Ano: ${dadosInflacao.ano}
    Inflação IPCA: ${dadosInflacao.percentual.toFixed(2)}%`);
  }

}

console.log(opcaoDois(inflacao));

export default opcaoDois;
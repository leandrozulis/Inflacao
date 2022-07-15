import salarios from '../listaDeDados/listaDeSalarios.js';
import inflacoes from '../listaDeDados/listaDeInflacoes.js';
import crescimentoPercentual from '../calculosPercentuais/crescimentoSalarial.js';

const opcaoTres = (salarios) => {

  for (let dadosSalario of salarios) {
    for (let inflacao of inflacoes) {
      if (dadosSalario.ano == inflacao.ano) {
        console.log(`
        Ano: ${dadosSalario.ano}
        Salário mínimo: R$ ${dadosSalario.salario.toFixed(2)}
        Crescimento Salárial: ${crescimentoPercentual(salarios)}%
        Inflação IPCA: ${inflacao.percentual}%`);
      }
    }
  }
}

const opcaoUm = (salario) => {

  for (let dadosSalario of salario) {
    console.log(`
    Ano: ${dadosSalario.ano}
    Salário mínimo: ${dadosSalario.salario.toFixed(2)}`);
  }

}

export {opcaoUm, opcaoTres};
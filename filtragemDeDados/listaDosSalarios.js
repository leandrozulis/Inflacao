import salarios from '../listaDeDados/listaDeSalarios.js';
import inflacoes from '../listaDeDados/listaDeInflacoes.js';

const retornaSalario = (salarios) => {

  for (let salario of salarios) {
    for (let inflacao of inflacoes) {
      if (salario.ano == inflacao.ano) {
        console.log(`
        Ano: ${salario.ano}
        Salário mínimo: R$ ${salario.salario.toFixed(2)}
        Crescimento Salárial: 
        Inflação IPCA: ${inflacao.percentual}%`);
      }
    }
  }
}

console.log(retornaSalario(salarios));

export default retornaSalario;
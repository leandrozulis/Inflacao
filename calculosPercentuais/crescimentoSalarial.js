import salarioAno from '../listaDeDados/listaDeSalarios.js';


const retornaPercentualCrescimento = (arr) => {

  let percentualDeCrescimento = 0;
  let diferenca = 0;

  for (let i = 0; i < arr.length; i++) {

    if (arr[i].ano == 2010 ) {

      continue;
      
    } 

    let atual = arr[i].salario;
    let decrementoSalario = arr[i - 1].salario;
    diferenca = atual - decrementoSalario;
    percentualDeCrescimento = (diferenca/decrementoSalario) * 100;
    return percentualDeCrescimento.toFixed(2);
    
  }

}

// console.log(retornaPercentualCrescimento(salarioAno));

export default retornaPercentualCrescimento;


// diferenca = salarioAnoAtual - salarioAnoAnterior
// percentualDeCrescimento = (diferenca/salarioAnoAnterior)*100;
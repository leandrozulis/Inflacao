import readLine from 'readline-sync';
import salarioMinimo from './listaDeDados/listaDeSalarios.js';
import inflacao from './listaDeDados/listaDeInflacoes.js';

console.log(`Escolha uma das alternativas:\n\n`);

console.log(`1 - Listar os salários minímos de 2010 à 2020`);
console.log(`2 - Listar o índice IPCA de 2010 à 2020`);
console.log(`3 - Comparação entre o percentual de aumento salarial e o IPCA\n\n`);

let escolha = readLine.question(`Digite o numero da sua escolha: `);
console.log("\n");

escolha = Number(escolha);

let anoLabel = `Ano: `;
let salarioLabel = `Salário mínimo: `;
let crescimentoLabel = `Crescimento Salarial: `;
let ipcaLabel = `Inflação IPCA: `;

anoLabel = anoLabel.padEnd(30,'.');
salarioLabel = salarioLabel.padEnd(30,'.');
crescimentoLabel = crescimentoLabel.padEnd(30,'.');
ipcaLabel = ipcaLabel.padEnd(30,'.');

switch(escolha){

  case 1:
    for (let i = 0; i <= salarioMinimo.length-1; i++) {
      let ano = salarioMinimo[i].ano;
      let salario = salarioMinimo[i].salario;

      let salarioFormatado = salario.toFixed(2).replace(".", ',');

      console.log("\n");
      console.log(anoLabel+ano);
      console.log(salarioLabel+"R$ "+salarioFormatado);
    }
    break;

  case 2:
    for (let i = 0; i <= inflacao.length-1; i++) {
      let ano = inflacao[i].ano;
      let ipca = inflacao[i].porcentagem;

      let ipcaFormatado = ipca.toFixed(2).replace(".", ',');

      console.log("\n");
      console.log(anoLabel+ano);
      console.log(ipcaLabel+ipcaFormatado+"%");
    }
    break;

  case 3:    
  for (let i = 0; i <= salarioMinimo.length-1; i++) {
      let ano = salarioMinimo[i].ano;
      let salario = salarioMinimo[i].salario;
      let percentualDeCrescimento;
      let crescimentoFormatado;

      if (i > 0) {
        let salarioAnterior = salarioMinimo[i-1].salario;
        let diferenca = salario - salarioAnterior;

        percentualDeCrescimento = (diferenca/salarioAnterior) * 100;
        crescimentoFormatado = percentualDeCrescimento.toFixed(2).replace(".",',');
      } else {
        crescimentoFormatado = "-";
      }

      let ipca = inflacao[i].porcentagem;

      let salarioFormatado = salario.toFixed(2).replace(".",",");
      let ipcaFormatado = ipca.toFixed(2).replace(".", ',');

      console.log("\n");
      console.log(anoLabel+ano);
      console.log(salarioLabel+"R$ "+salarioFormatado);
      console.log(crescimentoLabel+crescimentoFormatado+"%");
      console.log(ipcaLabel+ipcaFormatado+"%");
    }
    break;

  default:
    console.log(`Opção inválida!\n`);
    break;
}
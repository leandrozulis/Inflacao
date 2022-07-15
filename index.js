import readLine from 'readline-sync';
import salario from './filtragemDeDados/listaDosSalarios.js';
import salarios from './listaDeDados/listaDeSalarios.js';

console.log(`Escolha uma das alternativas:\n\n`);

console.log(`1 - Listar os salários minímos de 2010 à 2020`);
console.log(`2 - Listar o índice IPCA de 2010 à 2020`);
console.log(`3 - Comparação entre o percentual de aumento salarial e o IPCA\n\n`);

let escolha = readLine.question(`Digite o numero da sua escolha: `);
console.log("\n");

switch(escolha){

  case '1':
    console.log(`Ano: `);
    console.log(`Salário mínimo: `);
    break;

  case '2':
    console.log(`Ano: `);
    console.log(`Inflação IPCA: `);
    break;

  case '3':
    salario(salarios);
    break;

  default:
    console.log(`Opção inválida!\n`);
    break;
}
console.log(`Escolha uma das alternativas:\n\n`);

console.log(`1 - Listar os salários minímos de 2010 à 2020\n`);
console.log(`2 - Listar o índice IPCA de 2010 à 2020\n`);
console.log(`3 - Comparação entre o percentual de aumento salarial e o IPCA\n\n`);

console.log(`Digite o número da sua escolha: `);

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
    console.log(`Ano: `);
    console.log(`Salário mínimo: `);
    console.log(`Crescimento salarial: `);
    console.log(`Inflação IPCA: `);
  break;

  default:
    console.log(`Opção inválida!\n`);
  break;
}
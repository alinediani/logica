/*6. Escreva uma função que receba dois números o primeiro será a base e o segundo a
potência e no final a função retorna a base elevada pela potência.
Faça um programa que peça ao usuário a base e a potência e forneça para a função,
no final imprima o resultado.
OBS: O algoritmo só precisa saber lidar com números inteiros.*/
var rs=require('readline-sync')
function pot(b,p){
    var a= Math.pow(b,p);
   return a
    
}
console.log(pot((rs.questionInt('Digite a base: ')),(rs.questionInt('Digite a potência: '))))
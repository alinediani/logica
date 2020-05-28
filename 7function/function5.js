/*Escreva uma função que recebe dois parâmetros numéricos e retorne o menor número.
Solicite dois números para o usuário e forneça como argumento para esta função.
Escreva o resultado da função na tela dizendo qual menor número.*/
var rs=require('readline-sync')
var menor
function pegaMenor(m,n){
    if(m>n){
        menor=n
    }else if(n>m){
        menor=m
    }else{
        menor=console.log('Valores iguais')
    }
    return menor
}
console.log(pegaMenor((rs.questionInt("Digite um numero")),(rs.questionInt('Digite outro'))))
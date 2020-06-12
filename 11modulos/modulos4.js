/*Faça um algoritmo que receba um número e diga se ele é primo ou não
Utilize o pacote : https://www.npmjs.com/package/prime-number*/
var rs=require('readline-sync')
var ehPrimo = require('prime-number')
var n=ehPrimo(rs.questionInt('Digite um número: '))
if(n==true){
    console.log('é primo')
}else{
    console.log('não é primo')
}

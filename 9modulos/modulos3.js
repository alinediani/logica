/*Faça um algoritmo que receba um número e diga se ele é par ou ímpar
Utilize o pacote : https://www.npmjs.com/package/is-odd*/
var rs=require('readline-sync')
var  impar= require('is-odd');
var n= impar(rs.questionInt('Digite um numero'))
if(n==true){
    console.log('é impar')
}else{
    console.log('é par')
}

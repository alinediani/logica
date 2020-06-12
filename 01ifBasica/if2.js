/*Faça um programa que receba um número via teclado e verifique se este número é par
ou ímpar. */
var numero
var rs=require("readline-sync")
numero=rs.questionInt('Digite um número')
if(numero%2==0){
    console.log('Esse número é par')
}else{
    console.log('Esse número é impar')
}
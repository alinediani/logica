/*Faça um programa que receba um número via teclado e verifique se este número é par
ou ímpar. */
//var rs=require("readline-sync")
//numero=rs.questionInt('Digite um número')
function par(){
var numero=document.getElementById('n').value
if(numero%2==0){
    alert('Esse número é par')
}else{
    alert('Esse número é impar')
}}
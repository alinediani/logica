/*Escreva um programa que pergunta um número ao usuário, e mostra sua tabuada
completa (de 1 até 10).
EX.: 5
5x1 = 5, 5x2 = 10, 5x3=15, 5x4=20, 5x5=25, 5x6 = 30, 5x7 = 35, 5x8 = 40, 5x9 = 45,
5x10 = 50*/
var numero
var rs=require('readline-sync')
numero=rs.questionInt('Digite um numero')
var c=1,r=0
while(c<11){
r=c*numero
console.log(numero+"X"+c+"="+r)
c++
}
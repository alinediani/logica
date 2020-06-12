/*Fazer um programa que calcule e imprima o fatorial de um número fornecido pelo usuário,
usando o comando For.. Perguntar ao usuário se ele deseja calcular o fatorial de
outro número e repetir a execução do programa tantas vezes quantas o usuário indicar.*/
var n,c
var r=1
var rs=require('readline-sync')
n=rs.questionInt('Digite um número')
for(c=n;c>1;c--){
    r=r*c
}
console.log(r)
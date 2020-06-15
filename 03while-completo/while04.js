/*Faça um programa que recebe um número e imprima todos os números pares de 0 até
o número inserido.
Ex: usuário inseriu 8
O programa imprime
0
2
4
6
8*/
var numero,c
var rs=require('readline-sync')
numero=rs.questionInt('Digite um número: ')
c=numero
while(c>0){
if(c%2==0){
    console.log(c)
    c--
}else{
    c--
}
}
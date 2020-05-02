/*Faça um programa que recebe um número de entrada e repita a mensagem “BIP BIP”
de acordo com o número inserido.
EX: usuário inseriu 3
O programa imprime:
BIP BIP
BIP BIP
BIP BIP*/
var numero,c
var rs=require('readline-sync')
numero=rs.questionInt('Digite um numero: ')
c=0
while(c!=numero){
    console.log('BIP BIP')
    c++
}
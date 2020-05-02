/*Faça um programa que calcule a potência (potenciação) de um número.
Para isso ele deve receber dois números de entrada: o primeiro número é a base da
potência, o segundo número será a potência.
EX: usuário inseriu 2 para base e 4 para potência.
O programa imprime :
16
Lembrando: 2

4 = 2*2*2*2 */
var base,expoente,c
var rs=require('readline-sync')
base=rs.questionInt('Digite a base')
expoente=rs.questionInt('Digite o expoente')
c=0
r=1
while(expoente!=c){
r=r*base
c++
}
console.log(r)
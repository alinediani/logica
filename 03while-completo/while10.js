/*Faça um algoritmo que receba um número e imprima todos seus divisores.
EX : usuário informou 21
O algoritmo imprime :
1
3
7
21
DICA: Você pode precisar usar a operação de módulo (a%b)*/
var a
var rs=require('readline-sync')
a=rs.questionInt('Digite um número')
var b=a
while(b>0){
    if(a%b==0){
        console.log(b)
        b--
    }else{
        b-- 
    }
}
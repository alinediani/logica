/*14. Faça um programa para ler dois números inteiros A e B e informar se A é divisível por B.*/
var a,b
var rs=require('readline-sync')
a=rs.questionInt('Informe um número')
b=rs.questionInt('Informe outro número')
if(a%b==0){
    console.log(a+' é divisivel por '+b)
}else{
    console.log(a+' não é divisivel por '+b)
}
/*(OBRIGATÓRIO) Escreva um programa que calcule a soma de todos os múltiplos de 3
e de 5 entre 1 e 1000.*/
var rs=require('readline-sync')
var n=rs.questionInt('Aperte o número 1')
var m3=0
var m5=0
while (n<=1000) {
if(n%3==0){
    m3=m3+n
}
if(n%5==0){
    m5=m5+n
}
 n++   
}
console.log(m3+' '+m5)
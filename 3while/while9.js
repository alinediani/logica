/*Faça um algoritmo que receba uma palavra e imprima ela ao contrário.
EX: usuário informou BANANA
Algoritmo imprime:
ANANAB*/
var palavra
var rs=require('readline-sync')
palavra=rs.question('Digite uma palavra')
var i=palavra.length
while(i>-1){
console.log(palavra[i])
i--
}

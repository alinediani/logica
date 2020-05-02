/*Faça um algoritmo que receba uma palavra e imprima cada caractere da palavra em
uma linha.
EX: usuário informou MAÇÃ
O algoritmo imprime:
M
A
Ç
Ã*/
var palavra
var i=0
var rs=require('readline-sync')
palavra=rs.question('Informe a palavra')
while (i<palavra.length){
console.log(palavra[i])
i++
}



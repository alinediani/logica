/*Faça um algoritmo que verifica se uma string comece com a palavra google
Caso comece imprima que a palavra é valida se não diga que não conhece o serviço.
EX: entrada Google drive
O algoritmo imprime
Palavra valida
Utilize o método startsWith()*/
var rs=require('readline-sync')
frase=rs.question('Digite um serviço: ')
if(frase.startsWith('Google')){
    console.log('Palavra válida')
}else{
    console.log('Não conheço o serviço')
}


/*Escreva um programa para ler o ano de nascimento de uma pessoa e
escrever uma mensagem que diga se ela poderá ou não votar este ano
(não é necessário considerar o mês em que ela nasceu).*/
var ano 
var rs=require('readline-sync')
ano= rs.questionInt('Em que ano você nasceu?')
if (ano>2004){
    console.log('Você não pode votar')
}else if(ano>2002||ano<=1955){
    console.log('Você pode votar mas não é obrigadx')
}else if(ano<=2002&&ano>1955){
    console.log('Você é obrigadx a votar')
}
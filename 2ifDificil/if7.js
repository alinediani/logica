/*Elabore um programa para testar se uma senha digitada é igual a “batatafrita”.
Se a senha estiver correta escreva
“Acesso permitido”,
do contrário emita a mensagem
“Você não tem acesso ao sistema”.*/
var senha
var rs=require('readline-sync')
senha=rs.question('Digite a senha')
if(senha=="batatafrita"){
    console.log('Acesso permitido')
}else{
    console.log('Você não tem acesso ao sistema')
}
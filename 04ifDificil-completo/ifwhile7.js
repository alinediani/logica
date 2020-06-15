/*Escreva um programa que apresente quatro opções:
(a) consulta saldo, (b) saque e (c) depósito e (d) sair.
O saldo deve iniciar em R$ 0,00.
A cada saque ou depósito o valor do saldo deve ser atualizado.*/
var rs=require('readline-sync')
var saldo=0
var op=''
while(op!="d"){
op=rs.question('O que quer fazer? (a) consulta saldo, (b) saque e (c) depósito e (d) sair.')
if(op=="a"){
    console.log(saldo)
}else if(op=="b"){
    var saque=rs.questionFloat('Informe o valor do saque: ')
    if(saque>saldo){
        console.log('Saldo insuficiente')
    }else{
        saldo=saldo-saque
        console.log('Saque realizado com sucesso. Novo Saldo: '+saldo)
    }
}else if(op=="c"){
    var dep=rs.questionFloat('Informe o valor do depósito: ')
    saldo=saldo+dep
    console.log('Depósito realizado com sucesso. Novo Saldo: '+saldo)
}
}
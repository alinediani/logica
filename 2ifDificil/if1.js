/*Faça um programa que leia o valor de um produto X e leia a quantidade de reais
de um cofrinho que contenha:
a. N moedas de 1 real;
b. N moedas de 50 centavos;
c. N moedas de 25 centavos;
d. N moedas de 10 centavos;
e. N moedas de 5 centavos;
f. N moedas de 1 centavos.
O programa deverá verificar se o total de reais que contém no cofrinho é o
bastante para compra o produto X e imprimir se possui ou não valor suficiente*/
var valorProd,valorMoeda,moeda100,moeda50,moeda25,moeda10,moeda5,moeda1
var rs=require('readline-sync')
valorProd=rs.questionFloat('Favor informar o valor do seu produto: ')
moeda100=rs.questionFloat('Favor informar quantas moedas de 1 real você tem: ')
moeda50=rs.questionFloat('Favor informar quantas moedas de 50 centavos você tem: ')
moeda25=rs.questionFloat('Favor informar quantas moedas de 25 centavos você tem: ')
moeda10=rs.questionFloat('Favor informar quantas moedas de 10 centavos você tem: ')
moeda5=rs.questionFloat('Favor informar quantas moedas de 5 centavos você tem: ')
moeda1=rs.questionFloat('Favor informar quantas moedas de 1 centavos você tem: ')
valorMoeda=moeda100+(moeda50/2)+(moeda25/4)+(moeda10/10)+(moeda5/20)+(moeda1/100)
if(valorMoeda>=valorProd){
    console.log('Você pode comprar esse produto quanto tem: '+valorMoeda)
}else{
    console.log('Você não pode comprar esse produto  quanto tem: '+valorMoeda)
}

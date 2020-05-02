/*Faça um programa que calcule e imprima o valor em reais de cada kw, o valor
em reais a ser pago o novo valor a ser pago por essa residência com um
desconto de 10%. Dado: 100 kilowatts custa 1/7 do salario minimo. quantidade
de kw gasto por residência.*/
var cadaKw,valor,novoValor,quantKw
var rs=require('readline-sync')
cadaKw=(1045/7)/100
quantKw=rs.questionFloat('Informe quantos kw você gasta')
valor=cadaKw*quantKw
novoValor=valor/0.10
console.log(quantKw+""+valor+""+novoValor)

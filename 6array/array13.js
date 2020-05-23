/*Faça um programa que receba uma frase e troque a palavra ANTILOPE por um de seus
nomes cientificos : Kobus ellipsiprymnus*/
var rs=require('readline-sync')
var frase=rs.question('Digite uma frase: ')
var f=frase.replace('ANTILOPE','Kobus ellipsiprymnus')
console.log(f)
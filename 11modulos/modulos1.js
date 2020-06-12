/*Faça uma programa que receba 4 notas e calcule a média e apresente ao usuário a
média no final.
Utilize o pacote : https://www.npmjs.com/package/median*/
var m= require('median')
var rs=require('readline-sync')
var notas=[]
for(var i=0;notas.length<4;i++){
    nota=rs.questionFloat('Digite uma nota: ')
    notas.push(nota)
}
var media=m(notas)
console.log('A média é: '+media)
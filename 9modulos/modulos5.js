/*Faça um algoritmo que receba a data nascimento de uma pessoa e calcule sua idade.
Utilize o pacote : https://www.npmjs.com/package/age-calculator*/
var rs=require('readline-sync')
var ano=rs.questionInt('Digite o ano de nascimento')
var mes=rs.questionInt('Digite o mes de nascimento')
var dia=rs.questionInt('Digite o dia de nascimento')
mes=mes-1
let {AgeFromDate} = require('age-calculator');
let ageFromDate = new AgeFromDate(new Date(ano,mes,dia)).age;
console.log("Sua idade é :", ageFromDate);
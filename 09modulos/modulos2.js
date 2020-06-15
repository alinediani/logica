/*Faça um algoritmo que receba peso e altura do usuário e calcule o IMC.
Para fazer o calculo do IMC utilize : https://www.npmjs.com/package/fasam-imc-calc*/
var rs=require('readline-sync')
var FasamImc = require('fasam-imc-calc');
var peso=rs.questionFloat('Digite o peso: ')
var altura=rs.questionFloat('Digite a altura: ')
var imc = new FasamImc(peso,altura);
console.log(imc.calc())
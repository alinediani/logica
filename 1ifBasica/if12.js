/*Faça um algoritmo que leia o nome, o sexo e o estado civil de uma pessoa. Caso sexo
seja “F” e estado civil seja “CASADA”, solicitar o tempo de casada (anos).*/
var nome,sexo,estadoCivil,anos
var rs=require('readline-sync')
nome=rs.question('Qual o seu nome?')
sexo=rs.question('Qual o seu sexo?')
estadoCivil=rs.question('Qual o seu estado civil?')
if(sexo=='F'&&estadoCivil=="CASADA"){
anos=rs.questionInt('Quanto tempo você tem de casada?')
console.log(nome+" "+sexo+" "+estadoCivil+" "+anos)
}else{
    console.log(nome+" "+sexo+" "+estadoCivil)
}
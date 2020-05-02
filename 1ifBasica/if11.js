/*Faça um programa que receba três notas, calcule e mostre a média aritmética entre
elas, caso a média aritmética seja:
Media maior ou igual a 7 imprimir :
ALUNO APROVADO
Media menor que 7 imprimir :
ALUNO REPROVADO*/
var nota1,nota2,nota3,media
var rs=require('readline-sync')
nota1=rs.questionFloat('Digite a primeira nota: ')
nota2=rs.questionFloat('Digite a segunda nota: ')
nota3=rs.questionFloat('Digite a terceira nota: ')
media=(nota1+nota2+nota3)/3
if(media>=7){
    console.log('ALUNO APROVADO')
}else{
    console.log('ALUNO REPROVADO')
}
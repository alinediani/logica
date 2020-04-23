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
/*Criar uma função que receba uma coleção de alunos e calcule a média de idade
Adicione uma nova função no arquivo calcula-media.js chamada
calculaMediaIdadeAluno(alunos).
A função deve receber um array da mesma classe dos alunos criada na atividade 2.

Após isso a função deve iterar pelos alunos e calcular a média de idade e retornar ela.
Adicione essa função para ser exportado pelo módulo.
Adicione no final do programa da atividade 2 após informar o nome dos alunos com
maior idade também imprimir a média de idade dos alunos utilizando o método
calculaMediaIdadeAluno(alunos)*/
var rs=require('readline-sync')
var calc=require('./calcula-media/index')
var alunos={}
alunos.aluno=[]
class Alunos{
    constructor(nome,idade){
        this.nome=nome
        this.idade=idade
    }
}
for(var i=0;i<3;i++){
    alunos.aluno[i]=new Alunos(rs.question('Digite o nome: '),rs.questionInt('Digite a idade: '))
}
var idadearr=[]
for(var j=0;j<3;j++){
    idadearr.push(alunos.aluno[j].idade)
}


for(var k=0;k<idadearr.length;k++){
    for(var l=0;l<alunos.aluno.length;l++){
        if(idadearr[k]==alunos.aluno[l].idade){
            console.log(alunos.aluno[l])
        }
    }
}
console.log(calc(idadearr))

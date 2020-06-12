/*Crie um algoritmo que cadastre 3 alunos e diga qual possui a maior idade, se mais de
um possuir maior idade apresentar o nome de todos os que possuem maior idade.
Para isso crie uma classe Aluno que receba duas variáveis no construtor nome e idade
e inicialize essas variáveis nas propriedades do objeto.
Após isso peça para o usuário cadastrar o primeiro aluno e solicite nome e idade.
Crie o objeto do aluno e adicione em um array.
Repita esse passo para os outros alunos.
Ao final o algoritmo deve iterar pelo array de alunos e descobrir quais são os alunos
com maior idade e imprimir seus nomes.*/
var rs=require('readline-sync')
var sort=require('sort')
var alunos={}
alunos.aluno=[]
class Alunos{
    constructor(nome,idade){
        this.nome=nome
        this.idade=idade
    }
}
for(var i=0;i<3;i++){
    alunos.aluno[i]=new Alunos(rs.question('Digite o nome: '),rs.question('Digite a idade: '))
}
var idadearr=[]
for(var j=0;j<3;j++){
    idadearr.push(alunos.aluno[j].idade)
}
idadearr.sort()

for(var k=0;k<idadearr.length;k++){
    for(var l=0;l<alunos.aluno.length;l++){
        if(idadearr[k]==alunos.aluno[l].idade){
            console.log(alunos.aluno[l])
        }
    }
}
  



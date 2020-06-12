/*Pegue o objeto carro da atividade 1 e exporte ele como um objeto módulo Para isso crie um arquivo chamado carro.js e adicione a classe criada na atividade 1
neste arquivo.
Adapte a atividade 1 para usar a referencia por módulo da classe Carro.*/
var rs=require('readline-sync')
var car=require('./carro')
var carro1,carro2={}
 carro1 = new car(rs.question('Digite o nome'),rs.question('Digite o modelo'),rs.question('Digite a cor'))
 carro2 = new car(rs.question('Digite o nome'),rs.question('Digite o modelo'),rs.question('Digite a cor'))
if(carro1.nome==carro2.nome && carro1.modelo==carro2.modelo){
    console.log('Carros iguais')
}else{
    console.log('Carros diferentes')
}
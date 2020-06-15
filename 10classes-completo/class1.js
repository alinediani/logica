/*Criar um algoritmo que receba 2 carros e verifique se os carros são iguais
Para isso :
Crie uma classe Carro que receba as variáveis nome, modelo e cor no construtor e
inicialize as propriedades com estes valores.
Após isso informe ao usuário para cadastrar o primeiro carro e peça, o nome, modelo e
cor.
Após informar o primeiro carro peça o segundo carro também solicitando nome, modelo
e cor.
Ao final o algoritmo deve comparar se os carro são iguais.
Um carro vai ser igual ao outros se modelo e nome possuem o mesmo valor.*/
var rs=require('readline-sync')
var carro1={}
var carro2={}
class Carro{
    constructor(nome,modelo,cor){
        this.nome=nome
        this.modelo=modelo
        this.cor=cor
    }
    
}
var carro1 = new Carro(rs.question('Digite o nome'),rs.question('Digite o modelo'),rs.question('Digite a cor'))
var carro2 = new Carro(rs.question('Digite o nome'),rs.question('Digite o modelo'),rs.question('Digite a cor'))
if(carro1.nome==carro2.nome && carro1.modelo==carro2.modelo){
    console.log('Carros iguais')
}else{
    console.log('Carros diferentes')
}
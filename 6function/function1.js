/*Faça uma função que recebe por parâmetro o raio de uma esfera e calcula o seu
volume (v = 4/3.pi.R^3
).

Então solicite ao usuário o raio e a esfera e utilize a função para exibir o resultado.*/
var rs=require('readline-sync')
function pedeRaio(rs){
var raio=rs.questionFloat('Raio da esfera')
    return raio
}
function calculaVolume(raio){

    var volume=4/3*Math.PI*(raio**3)
}
var raio=pedeRaio(rs)
var volume=calculaVolume(raio)
console.log('Volume da esfera: '+volume)
/*Faça um algoritmo que solicite ao usuário A ou B
Caso o usuário escolha A
O algoritmo deve imprimir toda informação do carro com maior aceleração
Caso o usuário escolha B
O algoritmo deve imprimir toda informação do carro com maior potência
Se houver mais de um carro imprimir todos 1 por 1.*/
var rs=require('readline-sync')
var fs=require('fs')
var carrosSerializados=fs.readFileSync('cars.json')
var carros=JSON.parse(carrosSerializados)
var solicit=rs.question('escolha A ou B ')
var maispot=0
var maisac=0
function maisPotente(carros){
    var potencia=carros.filter(
        function (carro){
          if(carro.Horsepower>maispot){
              maispot=carro.Horsepower
              pot=carro
          }
          return pot
        }
    )
    return pot
}
function maisAcelerado(carros){
    var aceleracao=carros.filter(
        function (carro){
          if(carro.Acceleration>maisac){
              maisac=carro.Acceleration
              desc=carro
          }
          return desc
        }
    )
    return desc
}
if(solicit=='A'){
    console.log(maisPotente(carros))
}else if(solicit=='B'){
    console.log(maisAcelerado(carros))
}else{
    console.log('Comando inválido')
}
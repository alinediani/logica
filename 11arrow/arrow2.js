/*Crie um algoritmo que conte quantos carros do Japan (Japão) existem na base
cars.json
O campo que define o país no cars.json é Origin
A comparação da string pode ser utilizada usando a palavra “Japan”

A resolução é similar ao exercício 1*/
var fs=require('fs')
var carrosSerializados=fs.readFileSync('cars.json')
var carros=JSON.parse(carrosSerializados)
function numeroDeCarros(carros){
var carrosJapan=carros.filter(
    function(carro){
        if(carro.Origin=='Japan'){
            return true
        }else{
            return false
        }
    }
)
return carrosJapan.length;

}
console.log(numeroDeCarros(carros))
/*Crie um algoritmo que conte quantos carros da Ford existem no cars.json.
A resolução é similar ao exercício 1, porém utilize o método “includes” com parâmetros
“Ford” na propriedade Car para realizar a contagem. */
var rs=require('readline-sync')
var fs=require('fs')
var carrosSerializados=fs.readFileSync('cars.json')
var carros=JSON.parse(carrosSerializados)
function numeroDeCarros(carros){
    var carrosFord=carros.filter(
        function(carro){
            if(carro.Car.includes('Ford')){
                return true
            }else{
                return false
            }
        }
    )
    return carrosFord.length
}
console.log(numeroDeCarros(carros))
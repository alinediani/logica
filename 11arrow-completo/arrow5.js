/*Faça um algoritmo que diga qual é o carro mais potente da lista cars.json.
Utilize o campo Horsepower para descobrir qual é o mais potente*/
var fs=require('fs')
var carrosSerializados=fs.readFileSync('cars.json')
var carros=JSON.parse(carrosSerializados)
var mais=0
function maisPotente(carros){
    var potencia=carros.filter(
        function (carro){
          if(carro.Horsepower>mais){
              mais=carro.Horsepower
          }
          return mais
        }
    )
    return mais
}
maisPotente(carros)
console.log(mais)
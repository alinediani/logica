/*Faça um algoritmo que diga qual é o carro menos potente da lista cars.json.
Utilize o campo Horsepower para descobrir qual é o menos potente*/
var fs=require('fs')
var carrosSerializados=fs.readFileSync('cars.json')
var carros=JSON.parse(carrosSerializados)
var menos=230
function menosPotente(carros){
    var potencia=carros.filter(
        function (carro){
          if(carro.Horsepower<menos){
              menos=carro.Horsepower
          }
          return menos
        }
    )
    return menos
}
menosPotente(carros)
console.log(menos)
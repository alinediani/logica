var fs=require('fs')
var carrosSerializados=fs.readFileSync('cars.json')
var carros=JSON.parse(carrosSerializados)
var menos=230
function menosPotente(carros){
    var potencia=carros.filter(
        function (carro){
          if(carro.Horsepower==0){
              return carro
          }else{
              return false
          }
          
        }
    )
    return potencia
}

console.log(menosPotente(carros))
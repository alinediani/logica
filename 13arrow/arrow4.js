/*Faça um algoritmo que calcule a média de potência dos carros da Europe (Europa)
Similar a atividade 2 porém usaremos o campo Origin para selecionar os carros da
europa e depois disso aplicar a média em cima do campo Horsepower.*/
var fs=require('fs')
var carrosSerializados=fs.readFileSync('cars.json')
var carros=JSON.parse(carrosSerializados)
var arr=[]
var r=0
function carEuro(carros){
    var carrosEurope=carros.filter(
        function(carro){
            if(carro.Origin=='Europe'){
               return arr.push(carro.Horsepower)
                
            }else{
                return false}
            }
            )
            return arr
            }
            carEuro(carros)
       for(var i=0;i<arr.length;i++){
           r=arr[i]+r
       }
       r=r/arr.length
       
         
           
           console.log(r)


/*Crie um algoritmo que solicite um número para o usuário e diga quantos carros mais
potente que o valor informado.
Para isso utiliza a propriedade “Horserpower” do cars.json
DICA: função filter ou procure como contar quantos objetos tem x valor em uma lista no
google.*/
var rs=require('readline-sync')
var fs=require('fs')
var carrosSerializados=fs.readFileSync('cars.json')
var carros=JSON.parse(carrosSerializados)
var hp=rs.questionInt('Qual o minimo hp dos carros?')
function numeroDecarros(minimohp,carros){
    //var contadorCarros=0
    //for(var i=0;i<carros.length;i++){
      //  var carro=carros[i];
        //if(carro.Horsepower>=minimohp){
            //contadorCarros++;
     //   }
   // }
   var carrosComHpMinimo=carros.filter(
       function(carro){
           if(carro.Horsepower>=minimohp){
               return true;
           }else{
               return false;
           }
       }
   );
    return carrosComHpMinimo.length;
}
console.log(numeroDecarros(hp,carros))
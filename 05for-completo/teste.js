//tentativa feita as pressas utilizando o módulo readline-sync do node.js, código feito em javascript por Aline Diani, essa é uma das minhas linguagens favoritas
const a= require('readline-sync')
let compPista=a.questionFloat('Qual o comprimento da pista em metros?')
let numeroVoltas=a.questionInt('Qual o número de voltas a ser percorrido?')
let numeroReabastecimentos=a.questionInt('Qual o número de reabastecimento desejado?')
let consumoCombustivel=a.questionFloat('Qual o consumo do carro em km por litro?')
let quantocabe=a.questionInt('Quantos litros cabem no tanque?')
let metroPorKm=compPista/1000
let quantidade=quantocabe
for(i=0;i<numeroVoltas;i++){
quantidade=quantidade-(metroPorKm*consumoCombustivel)
if (quantidade==0&&numeroReabastecimentos!=0){
    numeroReabastecimentos--
    quantidade=quantocabe
}else if(quantidade==0&&numeroReabastecimentos==0){
break
}
}
console.log("é preciso no minimo "+quantidade+" de litros no tanque")
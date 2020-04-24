var rs=require('readline-sync')
var numero=rs.questionInt('Digite um número')
var resultado=1
while(numero>1){
    resultado= resultado*numero
    numero=numero-1
}
console.log(resultado)
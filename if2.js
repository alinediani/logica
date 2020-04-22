var numero
var rs=require("readline-sync")
numero=rs.questionInt('Digite um número')
if(numero%2==0){
    console.log('Esse número é par')
}else{
    console.log('Esse número é impar')
}
/*Encontrar o dobro de um número caso ele seja positivo e o seu triplo caso seja
negativo, imprimindo o resultado.*/
var numero,resultado
var rs=require('readline-sync')
numero=rs.questionInt('Informe um número: ')
if(numero>0){
resultado=numero*2
    console.log(resultado)
}else if(numero<0){
    resultado=numero*3
    console.log(resultado)
}else{
    console.log("0")
}
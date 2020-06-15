/*Escreva um algoritmo que imprima todos os números ímpares de 1 até 100.*/
var numero
var rs=require('readline-sync')
numero=1
while(numero>0&&100>numero)
{
    if(numero%2!=0){
        console.log(numero)
        numero++
    }else{
        numero++
    }
}
/*Escreva um programa para ler 3 valores inteiros (considere que não serão lidos valores
iguais) e escrevê-los em ordem crescente.*/
var num1,num2,num3
var rs=require('readline-sync')
num1=rs.questionInt('Digite o primeiro número')
num2=rs.questionInt('Digite o segundo número')
num3=rs.questionInt('Digite o terceiro número')
if (num1>num2&&num2>num3){
    console.log(num3+""+num2+""+num1)
}else if(num2>num1&&num1>num3){
    console.log(num3+""+num1+""+num2)
}else if(num3>num1&&num1>num2){
    console.log(num2+""+num1+""+num3)
}else if(num1>num3&&num3>num2){
    console.log(num2+""+num3+""+num1)
}else if(num2>num3&&num3>num1){
    console.log(num1+""+num3+""+num2)
}else{
    console.log(num1+""+num2+""+num3)
}


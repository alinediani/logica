/*Escreva um programa que leia as medidas dos lados de um triângulo e escreva se ele é
Equilátero, Isósceles ou Escaleno.
Sendo que:

− Triângulo Equilátero: possui os 3 lados iguais.
− Triângulo Isóscele: possui 2 lados iguais.
− Triângulo Escaleno: possui 3 lados diferentes.*/
var lado1,lado2,lado3
var rs=require('readline-sync')
lado1=rs.questionInt('Informe o primeiro lado:')
lado2=rs.questionInt('Informe o segundo lado:')
lado3=rs.questionInt('Informe o terceiro lado:')
if(lado1==lado2&&lado1==lado3){
    console.log('Esse é um triângulo equilatero')
}else if(lado1==lado2||lado2==lado3||lado3==lado1){
    console.log('Esse é um triângulo isosceles')
}else{
    console.log('Esse é um triangulo escaleno')
}
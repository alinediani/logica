/*Escreva um programa para ler o número de lados de um polígono regular e a medida do
lado (em cm). Calcular e imprimir o seguinte:
− Se o número de lados for igual a 3 escrever TRIÂNGULO e o valor da área
− Se o número de lados for igual a 4 escrever QUADRADO e o valor da sua área.
− Se o número de lados for igual a 5 escrever PENTÁGONO.*/
var area,quantLado,cmLado
var rs=require('readline-sync')
quantLado=rs.questionInt('Informe quantos lados tem o poligono')
cmLado=rs.questionFloat('Informe o centimetro de um dos lados')
if(quantLado==3){
    altura=cmLado*Math.sqrt(3)/2
    area=cmLado*altura/2
    console.log('A área do TRIANGULO é'+area)
}else if(quantLado==4){
    area=cmLado*cmLado
    console.log('A área do quadrado é'+area)
}else if(quantLado==5){
    altura=cmLado*Math.sqrt(3)/2
    areaT=cmLado*altura/2
    area=areaT*5
    console.log('A área do pentagono é'+area)
}else{
    console.log('Favor informar um poligono com até 5 lados')
}
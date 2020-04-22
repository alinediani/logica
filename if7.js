var area,quantLado,cmLado
var rs=require('readline-sync')
quantLado=rs.questionInt('Informe quantos lados tem o poligono')
cmLado=rs.questionFloat('Informe o centimetro de um dos lados')
if(quantLado==3){
    area=(cmLado*cmLado)/2
    console.log('A área do TRIANGULO é'+area)
}else if(quantLado==4){
    area=cmLado*cmLado
    console.log('A área do quadrado é'+area)
}else if(quantLado==5){
    area=(cmLado*cmLado)/2
    console.log('A área do pentagono é'+area)
}else{
    console.log('Favor informar um poligono com até 5 lados')
}
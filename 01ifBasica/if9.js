/*Escreva um programa que leia o valor de 3 ângulos de um triângulo e escreva se o
triângulo é Acutângulo, Retângulo ou Obtusângulo.
Sendo que:
− Triângulo Retângulo: possui um ângulo reto. (igual a 90o)
− Triângulo Obtusângulo: possui um ângulo obtuso. (maior que90o)
− Triângulo Acutângulo: possui três ângulos agudos. (menor que 90o)*/
var ang1,ang2,ang3
var rs=require('readline-sync')
ang1=rs.questionInt('Qual o primeiro angulo?')
ang2=rs.questionInt('Qual o segundo angulo?')
ang3=rs.questionInt('Qual o terceiro angulo?')
if(ang1+ang2+ang3!=180)
{
    console.log('Esse triangulo não existe')
}else if(ang1==90||ang2==90||ang3==90){
    console.log('Esse é um triângulo retângulo')
}else if((ang1>90&&ang2<90&&ang3<90)||(ang2>90&&ang1<90&&ang3<90)||(ang3>90&&ang1<90&&ang2<90)){
    console.log('Esse é um triangulo obtusangulo')
}else if(ang1<90&&ang2<90&&ang3<90){
    console.log('Esse triangulo é acutangulo')
}else{
    console.log('Esse triangulo não existe')
}
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
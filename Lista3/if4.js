var numero,c
var rs=require('readline-sync')
numero=rs.questionInt('Digite um número: ')
c=numero
while(c>0){
if(c%2==0){
    console.log(c)
    c--
}else{
    c--
}
}
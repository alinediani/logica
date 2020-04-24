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
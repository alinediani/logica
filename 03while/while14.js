/*Fazer um algoritmo que receba 8 idades do usuário e no final ele imprimir
qual é a menor idade.*/
var n1,n2,n3,n4,n5,n6,n7,n8,r,c
var rs=require('readline-sync')
n1=rs.questionInt('Digite um numero')
n2=rs.questionInt('Digite um numero')
n3=rs.questionInt('Digite um numero')
n4=rs.questionInt('Digite um numero')
n5=rs.questionInt('Digite um numero')
n6=rs.questionInt('Digite um numero')
n7=rs.questionInt('Digite um numero')
n8=rs.questionInt('Digite um numero')
l= new Array()
l[0]=n1
l[1]=n2
l[2]=n3
l[3]=n4
l[4]=n5
l[5]=n6
l[6]=n7
l[7]=n8
c=0
r=200
while(8>c){
if(r>l[c]){
r=l[c]
c++
}else{
    c++
}
}
console.log(r)
/*Fazer um algoritmo que receba 5 números e mostra o produto dos ímpares e
a soma dos pares
EX: valores fornecidos 1,2,3,4,5
Impares -> 1 * 3 * 5 = 15
Pares -> 2 = 4 = 6
O programa imprime :
Produtos dos impares : 15
Soma dos pares : 6*/
var n1,n2,n3,n4,n5,i,p,c
var rs=require('readline-sync')
n1=rs.questionInt('Digite um numero')
n2=rs.questionInt('Digite um numero')
n3=rs.questionInt('Digite um numero')
n4=rs.questionInt('Digite um numero')
n5=rs.questionInt('Digite um numero')
l=new Array()
l[0]=n1
l[1]=n2
l[2]=n3
l[3]=n4
l[4]=n5
c=0
p=0
i=1
while(c<5){
    if(l[c]%2==0){
       p=p+l[c]
       c++
    }else{
        i=i*l[c]
        c++
    }
}
console.log('SOMA DOS PARES:'+p+'PRODUTO DO IMPARES:'+i)


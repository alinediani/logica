var base,expoente,c
var rs=require('readline-sync')
base=rs.questionInt('Digite a base')
expoente=rs.questionInt('Digite o expoente')
c=0
r=1
while(expoente!=c){
r=r*base
c++
}
console.log(r)
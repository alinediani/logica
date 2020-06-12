/*5. Crie um programa que peça o usuário n números e, quando o usuário digitar -1, imprima
o maior e o menor, sem levar em consideração o -1*/
var rs=require('readline-sync')
var m=0
var n=[]
var p=0
var q=0
while(m!=-1){
    var m=rs.questionInt('Digite um número')
    n.push(m)
}
n.pop();
console.log(n)
for(var o=0;o<n.length;o++){
    if(n[o]>n[o-1]){
        p=n[o]
    }
}
for(var r=0;r<n.length;r++){
    if(n[r]<n[r-1]){
        q=n[r]
    }
}
console.log(p)
console.log(q)
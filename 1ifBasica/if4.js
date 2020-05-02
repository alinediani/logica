/*As maçãs custam R$ 0,30 cada se forem compradas menos do que uma dúzia, e R$
0,25 se forem compradas pelo menos doze. Escreva um programa que leia o número de
maçãs compradas, calcule e escreva o valor total da compra */
var macas
var rs=require('readline-sync')
macas=rs.questionInt('Quantas maçãs foram compradas?')
if(macas>=12){
console.log("total= "+macas*0.25)
}else{
    console.log("total= "+macas*0.30)
}
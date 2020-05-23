/*Faça um algoritmo que receba uma palavra, após isso ele remove todas as vogais
dessa palavra e imprime a palavra novamente porém sem as vogais.
EX: Entrada banana
O algoritmo imprime :
Bnn
*/
var rs=require('readline-sync')
var palavra=rs.question('Digite uma palavra: ')
var final=[]
for(var c=0;c<palavra.length;c++){
if(palavra[c]=='a'||palavra[c]=='e'||palavra[c]=='i'||palavra[c]=='o'||palavra[c]=='u'){
}else{final.push(palavra[c])}
}
f=final.join('')
console.log(f)
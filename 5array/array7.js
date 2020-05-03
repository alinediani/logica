/*Crie um programa que receba uma palavra e exiba quantas consoantes e vogais essa
palavra tem.
EX : saúde
2 consoantes

3 vogais */
var rs=require('readline-sync')
var r=0
var s=0
var vogais=['A','E','I','O','U','a','e','i','o','u'];
var palavra=rs.question('Digite uma palavra')
vogais.toString
for(var c=0;c<palavra.length;c++){
    if(vogais.includes(palavra[c])){
        r++
    }else{
        s++
    }
}
console.log(palavra+' contém '+r+' vogais e '+s+' consoantes')
/*Faça um programa que receba uma palavra e verifica se a palavra está cometendo o
seguinte erro de português
Antes de “p” ou “b” devemos usar M
Caso a palavra esteja errada informar o erro
Se não dizer que a palavra está certa.
Utilize o método includes()*/
var rs=require('readline-sync')
var palavra=rs.question('Digite uma palavra')
for(var c=0;c<palavra.length;c++){
    if(palavra[c]=='p'||palavra[c]=='b'){
        if(palavra[c-1]=='m'||palavra[c-1]=='n'){
        if(palavra[c-1]=='m'){
            console.log('A palavra está certa')
        }else{
            console.log('A palavra está errada: antes de p ou b é m')
        }}else{}
    }else{}
}
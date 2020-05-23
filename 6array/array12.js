/*Faça um programa que receba uma palavra e diga se existe vogais ou não.
Utilize o método indexOf()
 */
var rs=require('readline-sync')
var palavra=rs.question('Digite uma palavra')
    if (palavra.indexOf("a","e", "i", "o", "u")){
        console.log('não tem vogais')
    }else{
        console.log('tem vogais')
    }


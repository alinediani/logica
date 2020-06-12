/*. Faça uma função que recebe um número e devolve seu valor absoluto.
No final peça um número para o usuário e exiba o valor absoluto.*/
var rs=require('readline-sync')

function absoluto(rs){
var num=rs.questionInt('Digite um número: ')
if(num>=0){
}else{
    num=num*-1
    }
    return num;
}
console.log(absoluto(rs))
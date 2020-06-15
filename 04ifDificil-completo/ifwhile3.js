/*(OBRIGATÓRIO) Escreva um programa javascript para escrever o seguinte padrão na
tela, com N linhas:
*
* *
* * *
* * * *
* * * * *
Onde N é um número maior que zero determinado pelo usuário (no exemplo, N=5).*/
var rs=require('readline-sync')
var n=rs.question('Digite um número')
var i=0
var m=""
while (i<n){
    m=m+"*"
    console.log(m)
    i++
}
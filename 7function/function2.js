/*Faça uma função que recebe por parâmetro um valor inteiro e positivo e retorna o valor
lógico Verdadeiro caso o valor seja primo e Falso em caso contrário.
Solicite ao usuário o número e no final imprima se é primo ou não utilizando a função na
condição IF.*/
var rs=require('readline-sync')

function primo(rs){
    var n=rs.question('Digite um número')
    var divisor = 2
    while (divisor < n) {
        if (n % divisor == 0) {
            return false
        }
        divisor++
    }
    return true
}
var resultado=primo(rs)
if(resultado==true){
    console.log("É primo")
}else{
    console.log('Não é primo')
}
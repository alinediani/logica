/*(OBRIGATÓRIO) Escreva um programa que passe por todos os números de 1 a 50 e
para cada um deles imprima na tela se o número é par ou ímpar. Caso o número
também seja primo, o programa deve dizer que ele é primo. (um número primo é um
número que só é divisível por ele mesmo e por 1). Dica: Neste exercício você pode
precisar de ajuda do operador MÓDULO (%). Você também pode precisar criar mais de
um loop.*/
var n1 = 1
var n2 = 50
while (n1 <= n2) {
    var ehPrimo = true
    var divisor = 2
    while (divisor < n1) {
        if (n1 % divisor == 0) {
            ehPrimo = false
        }
        divisor++
    }
    if(n1 % 2 == 0) {
        if(ehPrimo) {
            console.log(n1 + " eh par e primo ")
        } else {
            console.log(n1 + " eh par ")
        }
    } else {
        if(ehPrimo) {
            console.log(n1 + " eh impar e primo ")
        } else {
            console.log(n1 + " eh impar ")
        }
    }
    n1++
}
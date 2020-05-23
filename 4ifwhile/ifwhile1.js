/*(OBRIGATÓRIO) Escreva um programa que pedirá para o usuário dois números entre 1
e 100. O programa deve, então, iterar de um em um do menor pro maior, sempre
imprimindo o número na tela do usuário. Entretanto, caso o número seja divisível por 7,
o programa deve ao invés disso imprimir a palavra “Ping”. Caso o número seja divisível
por 5, o programa deve imprimir “Pong”. Caso o número seja divisível por 7 e 5, o
programa deveria imprimir a mensagem “Ping Pong”. Dica: Neste exercício vocês talvez
precisem fazer uso do recurso “user.questionInt()” que transforma o conteúdo de um
input do usuário de string para inteiro.*/
var rs=require('readline-sync')
var num1=rs.questionInt('Digite um numero')
var num2=rs.questionInt('Digite outro numero')
var maior,menor
if (num1>num2) {
    maior=num1
    menor=num2
}else{
    maior=num2
    menor=num1
}
var c=menor;
while(c<=maior){
    if (c%7==0&&c%5==0) {
        console.log('Ping Pong')
    }else if(c%7==0){
        console.log('Ping')
    }else if (c%5==0) {
        console.log('Pong')
    }
    else{console.log(c)}
    c++
}
/*Faça um programa que pergunte ao usuário escolher duas opções A e B.
A encerra o programa, B é pra fazer uma soma.
a. Se o usuário inserir A o programa fecha
b. Se o usuário inserir B o programa vai realizar uma operação de soma,
solicitando dois números inteiros (n1 e n2) onde após o usuário inserir o
segundo número o algoritmo deve apresentar a soma e também pergunta se
quer realizar outro cálculo.
c. Se o usuário inserir qualquer coisa diferente de A ou B o programa deve dizer
que não entendeu o comando e solicitar novamente para inserir A ou B*/
var condicao
var rs=require('readline-sync')
condicao=rs.question('Escolha condicao A ou B')
if(condicao=="a"||condicao=="b"){
while(condicao=="b"){
    var n1,n2,r
    n1=rs.questionInt('Digite um numero')
    n2=rs.questionInt('Digite outro numero')
    r=n1+n2
    console.log(r)
    condicao=rs.question("Aperte b para novo calculo ou a para sair")

}
console.log('sair')
}
else{
    console.log("Não entendemos, favor informar a ou b")
}
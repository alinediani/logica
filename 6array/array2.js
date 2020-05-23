/*(INNER JOIN) Faça um algoritmo que receba o nome de dois jogadores e após isso
peça 5 números de 1 a 10 para cada jogador. Primeiro para o jogador A e depois para o
jogador B.
Após a escolha de cada jogador o algoritmo deve apresentar quais foram os números
iguais que o jogador A e B colocaram.
EX: Jogador A : 1, 2, 3, 4, 5
Jogador B : 1,2,3,8,7
Algoritmo imprime :
1,2,3*/
var rs=require('readline-sync')
var nome1,nome2,numeros1,numeros2,iguais
nome1=rs.question('Digite o nome do primeiro jogador')
nome2=rs.question('Digite o nome do segundo jogador')
numeros1=[];
numeros2=[];
iguais=[];
for(var c=0;c<=10;c++){
    numeros1[c]=rs.questionInt(nome1+' Digite um número')
    numeros2[c]=rs.questionInt(nome2+' Digite um número')
}
console.log(nome1)
console.log(numeros1)
console.log(nome2)
console.log(numeros2)
for(var c=0;c<=10;c++){
    for(var d=0;d<=10;d++){
        if(numeros1[d]==numeros2[c]){
         iguais.push(numeros1[d])
        }
    }
}
console.log(iguais)

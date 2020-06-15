/*(RIGHT JOIN) Faça um algoritmo que receba o nome de dois jogadores e após isso
peça 5 números de 1 a 10 para cada jogador. Primeiro para o jogador A e depois para o
jogador B.
Após a escolha de cada jogador o algoritmo deve apresentar quais foram os números
que apenas o jogador B colocou diferente do A.
EX: Jogador A : 1, 2, 3, 4, 5
Jogador B : 1,2,3,8,7
Algoritmo imprime :
8,7*/
var rs=require('readline-sync')
var nome1,nome2,numeros1,numeros2,iguais
nome1=rs.question('Digite o nome do primeiro jogador')
nome2=rs.question('Digite o nome do segundo jogador')
numeros1=[];
numeros2=[];
iguais=[];
for(var c=0;c<=5;c++){
    numeros1[c]=rs.questionInt(nome1+' Digite um número')
    numeros2[c]=rs.questionInt(nome2+' Digite um número')
    if(numeros1[c]>10||numeros1[c]<1){
        numeros1[c]=rs.questionInt(nome1+' Digite um número válido')
    }
    if(numeros2[c]>10||numeros2[c]<1){
        numeros2[c]=rs.questionInt(nome1+' Digite um número válido')
    }
}
console.log(nome1)
console.log(numeros1)
console.log(nome2)
console.log(numeros2)
for(var i=0;i<=5;i++){
    
    numeros1.toString();
    if(numeros1.includes(numeros2[i])){
    
    }else{
        iguais.push(numeros2[i])
    }
}

console.log("Números que tem no 2 e no 1 não: "+iguais)
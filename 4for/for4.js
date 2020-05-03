/*Ler o nome de um aluno e suas duas notas A e B, e após calcular a média ponderada
entre
estas notas (A tem 30% do peso do grau final e B tem 70% do peso). Repetir este
procedimento para uma turma composta por cinco alunos, usando o comando For.
Exemplo de tela de saída:
Entre com o nome do aluno: João da Silva
Entre com o grau A: 5.0
Entre com o grau B: 6.0
O aluno João da Silva tem uma média:5.7 */
var nome,a,b,resultado,quantidade
var rs=require('readline-sync')
quantidade=rs.questionInt('Quantos alunos?')
nome=[]
a=[]
b=[]
for(var c=0;c<quantidade;c++){
nome[c]=rs.question('Digite o nome do aluno: ')
a[c]=rs.questionFloat('Digite a primeira nota: ')
b[c]=rs.questionFloat('Digite a segunda nota: ')
resultado=(a[c]/100*30)+(b[c]/100*70)
}
for(var c=0;c<quantidade;c++){
    console.log("O aluno "+nome[c]+" teve uma média de "+resultado)
}
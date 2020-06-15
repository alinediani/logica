/*Faça um algoritmo que receba uma entrada do usuário e caso encontre a letra a
transforme ela em maiúscula
EX: abelha
O algoritmo imprime
AbelhA
Dicas para esta atividade.
Para selecionar 1 caracter da string utilizamos a função charAt :
var nome = “oi”
console.log(nome.charAt(0))
console.log(nome.charAt(1))
O algoritmo imprime:
> o
> i*/
var palavra,palavraSeparada
var rs=require('readline-sync')

palavra= rs.question('Digite uma palavra: ')
var palavraSeparada = palavra.split('')
for (var i=0;i<palavra.length; i++){

  if(palavra.charAt(i)=== 'a'){
        
        palavraSeparada[i] = palavra.charAt(i).toUpperCase()

        

    }
  }
  
  console.log(palavraSeparada.join(''))
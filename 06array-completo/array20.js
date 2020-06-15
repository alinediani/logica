/*Faça um algoritmo que pergunta para o usuário se ele quer criptografar ou
descriptografar.
Utilize como criptografia a cifra de césar
Exemplo ->
Entrada : ARBYTE
SAIDA: DUEBWH
Caso o usuario opte por criptografar o algoritmo deve aplicar a cifra de césar e mostrar
o valor criptografado
Caso o usuário opte por descriptografar o algoritmo deve fazer a engenharia reversa e
retorna ao valor antes de criptografia.
Utilize todo o conhecimento até aqui pra desenvolver este algoritmo*/
var rs=require('readline-sync')
var palavra=rs.question('Digite uma palavra')
var alfabeto='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var nova=[];
for(i=0;i<palavra.length;i++){
    for(c=0;c<alfabeto.length;c++){
       if(palavra[i]==alfabeto[c]&&c>23){ //if para as letras XYZ (estava dando erro pois não tem como somar 3 depois delas)
        nova.push(alfabeto[c-23])//adiciona as letras ABC
        }else
      if(palavra[i]==alfabeto[c]){ //comparação entre alfabeto e palavara
            nova.push(alfabeto[c+3]) //é adicionado na nova palavra o indice da palavra +3
          }
    }
}
n=nova.join('')
console.log(n)
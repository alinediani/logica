/*3. Faça uma função que recebe a idade de uma pessoa em anos, meses e dias e retorna
essa idade expressa em dias.
Solicite a data ao usuário e o algoritmo imprime a quantidade de dias como resultado
utilizando a função criada.*/
var rs=require('readline-sync')
function idade(rs){
    var anos=rs.questionInt('Quantos anos você tem...')
    var meses=rs.questionInt('...quantos meses...')
    var dias=rs.questionInt('...e dias?')
    var dporm=meses*30
    var dpora=(30*12)*anos
    var total=dias+dporm+dpora
    return total;
}
console.log(idade(rs))
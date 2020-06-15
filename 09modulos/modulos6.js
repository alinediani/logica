/*Escolha um programa que você já fez em atividades passadas e faça o output do
terminal ficar colorido com o pacote CHALK: https://www.npmjs.com/package/chalk*/
const chalk = require('chalk');
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
console.log(chalk.green(idade(rs)))
console.log(chalk.red(idade(rs)))
console.log(chalk.blue(idade(rs)))
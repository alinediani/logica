var cadaKw,valor,novoValor,quantKw
var rs=require('readline-sync')
cadaKw=(1045/7)/100
quantKw=rs.questionFloat('Informe quantos kw você gasta')
valor=cadaKw*quantKw
novoValor=valor/0.10
console.log(quantKw+""+valor+""+novoValor)

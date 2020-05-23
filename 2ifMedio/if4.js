/*Uma empresa abriu uma linha de crédito para os funcionários.
O valor da prestação não pode ultrapassar 30% do salário.
Faça um programa que receba o salário, o valor do empréstimo e o número de
prestações e informe se o empréstimo pode ser concedido. Nenhum dos valores
informados pode ser zero ou negativo.*/
var salario,varEmp,parcelas,trinta
var rs=require('readline-sync')
salario=rs.questionFloat('Qual o seu salário?')
varEmp=rs.questionFloat('Qual o valor do empréstimo?')
parcelas=rs.questionInt('Quantas parcelas?')
trinta=salario*0.30
divisao=varEmp/parcelas
if(salario>0&&varEmp>0&&parcelas>0){
if(divisao>trinta){
console.log('O empréstimo não pode ser concedido')
}else{
    console.log('O empréstimo pode ser concedido')
}
}else{
    console.log('Favor informar um valor válido')
}
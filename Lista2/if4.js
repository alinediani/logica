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
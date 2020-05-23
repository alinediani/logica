/*Elabore um algoritmo que calcule o que deve ser pago por um produto,
solicitando o preço da etiqueta do produto e a escolha da condição de
pagamento. Utilize os códigos da tabela a seguir para ler qual a condição de
pagamento escolhida e efetuar o cálculo adequado. Código Condição de
pagamento
- 1 À vista em dinheiro ou cheque, recebe 10% de desconto
- 2 À vista no cartão de crédito, recebe 15% de desconto
- 3 Em duas vezes, preço normal de etiqueta sem juros
- 4 Em duas vezes, preço normal de etiqueta mais juros de 10%*/
var pagamento,etiqueta,condicao
var rs=require('readline-sync')
etiqueta=rs.questionFloat('Digite o preço da etiqueta ')
condicao=rs.questionInt('Digite o número da condição ')
if(condicao==1){
    pagamento=etiqueta-((etiqueta/100)*10)
    console.log(pagamento)
}else if(condicao==2){
    pagamento=etiqueta-((etiqueta/100)*15)
    console.log(pagamento)
}else if(condicao==3){
    pagamento=etiqueta/2
    console.log(pagamento+" "+pagamento)
}else if(condicao==4){
    pagamento=(etiqueta+((etiqueta/100)*10))/2
    console.log(pagamento+" "+pagamento)
}else{
    console.log('Informe condição válida')
}
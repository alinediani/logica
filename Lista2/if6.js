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
var rs=require('readline-sync')
var precos=[]
for(var cont=0;cont<3;cont++){
    var preco=rs.questionFloat('Diga o preço do produto')
    precos.push(preco);
}
console.log('Precos: '+precos)
var d=rs.questionInt('DÊ dinheiro')
var compra=0;
for(var cont=0;cont<precos.length;cont++){
    var atual=precos[cont]
        var acumulado=compra+atual
        compra=acumulado
}
console.log(compra)
if(compra>d){
    console.log('Precisa de mais dinheiro')
}else if(compra<d){
    console.log('Aguarde o troco')
    var troco=d-compra
    console.log('Tome o troco de '+troco+'reais')
}else{
    console.log('Aqui está o produto')
}
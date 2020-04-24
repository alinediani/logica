var condicao
var rs=require('readline-sync')
condicao=rs.question('Escolha condicao A ou B')
if(condicao=="a"||condicao=="b"){
while(condicao=="b"){
    var n1,n2,r
    n1=rs.questionInt('Digite um numero')
    n2=rs.questionInt('Digite outro numero')
    r=n1+n2
    console.log(r)
    condicao=rs.question("Aperte b para novo calculo ou a para sair")

}
console.log('sair')
}
else{
    console.log("Não entendemos, favor informar a ou b")
}
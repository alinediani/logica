var senha
var rs=require("readline-sync")
senha=rs.question('Digite a senha')
if(senha=='1234'){
    console.log('Acesso permitido')
}else{
    console.log('Acesso negado')
}
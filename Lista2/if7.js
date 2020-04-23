var senha
var rs=require('readline-sync')
senha=rs.question('Digite a senha')
if(senha=="batatafrita"){
    console.log('Acesso permitido')
}else{
    console.log('Você não tem acesso ao sistema')
}
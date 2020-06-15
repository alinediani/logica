/*(OBRIGATORIO)Solicite ao usuário para inserir yes ou no
Após isso utilize a API https://yesno.wtf/api
Esta api traz um dado aleatório yes ou no
No final imprima se o usuário acertou ou não*/
const axios=require('axios')
var rs=require('readline-sync')
var resposta=rs.question('sim ou não? ')
function simounao(){
    axios.get('https://yesno.wtf/api')
    .then(function(response){
        if(resposta==response.data.answer){
            return console.log('Acertou!')
        }else{
            return console.log('errou')
        }
        

    })
    .catch(function(error){
        console.log(error)
        })
    
    }
    simounao()
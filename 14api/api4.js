/*Faça um algoritmo que receba uma CEP e diga qual é o endereço
completo (Cidade, rua, estado) deste CEP.
Utilize a API : https://api.postmon.com.br/v1/cep/{CEP}
Exemplo CEP :https://api.postmon.com.br/v1/cep/89010020*/
const axios=require('axios')
var rs=require('readline-sync')
var cep=rs.question('Escreva o CEP: ')
function codigo(){
    axios.get('https://api.postmon.com.br/v1/cep/'+cep)
    .then(function(response){
        console.log(response.data.logradouro)
        console.log(response.data.cidade)
        console.log(response.data.estado)
       

    })
    .catch(function(error){
        console.log(error)
        })
    
    }
    codigo()
/*(OBRIGATORIO)Faça um algoritmo que imprima uma frase aleatória de Breaking Bad e
também seu autor
Utilize a API : https://breaking-bad-quotes.herokuapp.com/v1/quotes*/
const axios=require('axios')
function frase(){
    axios.get('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
    .then(function(response){
       console.log("Frase: ")
       console.log(response.data.quote)
       console.log("Autor: ")
       console.log(response.data.author)
        

    })
    .catch(function(error){
        console.log(error)
        })
    
    }
    frase()
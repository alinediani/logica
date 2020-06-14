/*Faça um algoritmo que receba um número de um episódio de
Breaking Bad.
Após isso o algoritmo deve imprimir o elenco de personagens e também de qual
temporada é este episódio.

Caso o episódio seja inválido dizer ao usuário que não existe este episódio.
Utilize a api : https://www.breakingbadapi.com/api/episodes/{NUMERO_DO_EPISODIO}
Exemplo episodio 10 : https://www.breakingbadapi.com/api/episodes/10 */
const axios=require('axios')
var rs=require('readline-sync')
var ep=rs.question('Escolha um episodio: ')
function episodio(){
    axios.get('https://www.breakingbadapi.com/api/episodes/'+ep)
    .then(function(response){
        console.log(response.data.characters)
       console.log(response.data.season)

    })
    .catch(function(error){
        console.log(error)
        })
    
    }
    episodio()
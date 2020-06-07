/*Faça uma função que receba um número e retorne se é perfeito ou não.
Após isso solicite ao usuário para inserir um número e imprimir se é perfeito ou não
utilizando a função e imprimindo o resultado no final.
OBS: Um número perfeito é aquele que a soma do seus divisores (auto excluindo) é
igual a ele mesmo
Exemplo 6 possui os seguintes divisores
1 + 2 + 3 = 6*/
var rs=require('readline-sync')
function perfeito(n){
    var o=[]
    var q=0
    for(var i=0;i<n;i++){
        if(n%i==0){
            o.push(i)
        }
    }
    for(var p=0;p<o.length;p++){
        q=o[p]+q
    }
    if(q==n){
       return 'Perfeito'
    }else{
        return 'Imperfeito'
    }

}
console.log(perfeito(rs.question('Digite um numero: ')))
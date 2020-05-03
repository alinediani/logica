/*Peça ao usuário para digitar dez valores numéricos e ordene por ordem crescente
esses valores, guardando-os num vetor e depois exibindo para o usuário.Para esta
atividade tente usar o algoritmo Bubble Sort (Método da bolha), pesquise sobre ele na
internet.
 */
var rs=require('readline-sync')
var n=[];
for(var c=0;c<10;c++){
    n[c]=rs.questionInt(' Digite um número')
}
var swap;
var last = n.length-1;
do{
    swap=false;
    for(var i=0;i<last;i++){
        if(n[i]>n[i+1]){
            [n[i],n[i+1]]=[n[i+1],n[i]];
            swap=true;
        }
    }
    last--;
}while(swap)
console.log(n)
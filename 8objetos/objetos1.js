/*Crie um programa que receba 3 entrada do usuário. A cor, o modelo e a marca, crie um
objeto Carro e atribua as entradas do usuário neste objeto.
No final o programa deve imprimir as informações do carro.
Utilize a criação de objetos para resolver este problema*/
var rs=require('readline-sync')
var carro=new Object();
carro.cor=rs.question('Digite a cor: ')
carro.modelo=rs.question('Digite o modelo: ')
carro.marca=rs.question('Digite a marca: ')
console.log(carro)
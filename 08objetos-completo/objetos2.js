/*Adicione no programa anterior após a impressão dos dados que ele salve o objeto carro
em formato JSON.
Utilize o JSON.stringify para transformar o objeto em string e após isso utilize os
métodos da biblioteca ‘fs’ para salvar o arquivo.
Salve o json como ‘carro.json’*/
var rs=require('readline-sync')
var fs=require('fs')
var carro=new Object();
carro.cor=rs.question('Digite a cor: ')
carro.modelo=rs.question('Digite o modelo: ')
carro.marca=rs.question('Digite a marca: ')
var carroSerializado= JSON.stringify(carro)
var caminho='carro.json'
fs.writeFileSync(caminho,carroSerializado)
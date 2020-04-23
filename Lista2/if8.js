var texto
var rs=require('readline-sync')
texto=rs.question('Informe o texto')
var i = 0;
var frase = new Array();

for ( i=0; i < texto.length ; i++ )	
frase[i] = texto.charAt(i);
if(frase[0]=="A"||frase[0]=="B"||frase[0]=="C"||frase[0]=="D"||frase[0]=="E"||frase[0]=="F"||frase[0]=="G"||frase[0]=="H"||frase[0]=="I"||frase[0]=="J"||frase[0]=="K"||frase[0]=="L"||frase[0]=="M"||frase[0]=="N"||frase[0]=="O"||frase[0]=="P"||frase[0]=="Q"||frase[0]=="R"||frase[0]=="S"||frase[0]=="T"||frase[0]=="U"||frase[0]=="V"||frase[0]=="W"||frase[0]=="X"||frase[0]=="Y"||frase[0]=="Z"){
    console.log('Essa letra é maiuscula')
}else{
    console.log('Essa letra não é maiuscula')
}
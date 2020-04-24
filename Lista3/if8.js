var texto

var rs=require('readline-sync')
var i=0
var a=0
texto=rs.question('Informe a palavra')
while (i <texto.length){
i++
var letra= new Array()
letra[i] = texto.charAt(i);

while(letra[a]<letra[i]){
    console.log(letra[a])
    a++
}
}


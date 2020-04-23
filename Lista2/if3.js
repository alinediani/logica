var ddi
var rs=require('readline-sync')
ddi=rs.question('Informe o DDI: ')
if(ddi==1){
    console.log('Estados Unidos')
}else if(ddi==49){
    console.log('Alemanha')
}else if(ddi==54){
    console.log('Argentina')
}else if(ddi==55){
    console.log('Brasil')
}else if(ddi==35){
    console.log('Portugal')
}else{
    console.log('Favor informar código válido')
}
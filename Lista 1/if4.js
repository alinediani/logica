var macas
var rs=require('readline-sync')
macas=rs.questionInt('Quantas maçãs foram compradas?')
if(macas>=12){
console.log("total= "+macas*0.25)
}else{
    console.log("total= "+macas*0.30)
}
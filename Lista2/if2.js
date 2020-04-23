var tipo,f,c
var rs=require('readline-sync')
tipo=rs.questionInt('Para converter F para C digite 1, C para F digite 0')
if(tipo==0){
    c=rs.questionFloat('Quantos graus celsius?')
    f=c*1.8+32
    console.log(f)
}else if(tipo==1){
    f=rs.questionFloat('Quantos graus Fahrenheit?')
    c=(f-32)/1.8
    console.log(c)
}


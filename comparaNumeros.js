var num1,num2
var rs=require('readline-sync')
num1 = rs.question('qual o primeiro numero')
num2 =rs.question('qual o segundo numero')
console.log('o primeiro numero é'+num1)
console.log('o primeiro numero é'+num2)
if (num1>num2){console.log("número"+num1+"é maior")}
else if (num1<num2){console.log("número"+num2+"é maior")}
else{console.log("os números são iguais")}
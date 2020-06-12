/*Escreva um programa que simule uma partida de pedra papel e tesoura.
Deve ser solicitado o nome do jogador A e do jogador B.
Após isso o programa deve pedir a jogada do jogador A e a jogada do jogador B.
No final o programa deve imprimir quem ganhou.
Dicas:
Papel ganha de pedra
Tesoura ganha de papel
Pedra ganha de tesoura
Para não exibir a jogada do jogador utilize o comando de “password” no readline-sync*/
var rs=require('readline-sync')
var j1=rs.question('Digite o nome do primeiro jogador: ')
var j2=rs.question('Digite o nome do segundo jogador: ')

var r1=rs.question(j1+' Jankenpon: ',{hideEchoBack:true});
var r2=rs.question(j2+' Jankenpon: ',{hideEchoBack:true});
//r1 vencendo
if((r1=="pedra.."&&r2=="tesoura")||(r1=="tesoura"&&r2=="papel..")||(r1=="papel.."&&r2=="pedra..")){
    console.log(j1+" ganhou!")
}else if((r2=="pedra.."&&r1=="tesoura")||(r2=="tesoura"&&r1=="papel..")||(r2=="papel.."&&r1=="pedra..")){
    console.log(j2+" ganhou!")
}else if((r1=="pedra.."&&r2=="pedra..")||(r1=="tesoura"&&r2=="tesoura")||(r1=="papel.."&&r2=="papel..")){
    console.log("empate")
}else{
    console.log('valor inválido')
}


function separaTexto(){
    var t = document.querySelector('input').value
    t = t.split(' ')

    var lista = document.querySelector('ol')

    for(i=0; i < t.length; i++){
        var linha = document.createElement('li')
        linha.innerText = t[i]
        lista.append(linha)
    }
}
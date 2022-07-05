var maiornumero;
var lista = [];
var listasort = [];
var posicao;



function informar(event){
    event.preventDefault()

    if (lista.length>=1) {
        lista = []
    }

    maiornumero = document.getElementById('maiornumero').value;
    var i
    for (i=1 ; i<=maiornumero; i++){
        lista.push(i);
    }
    console.log(lista)
}


function sortear(event){
    event.preventDefault()
    if (lista.length>=1) {
    // //sorteio a posicao de um numero
        const posicaosort = Math.floor(Math.random() * lista.length);
    // //adiciono o numero sorteado a lista dos sorteados
        listasort.push(lista[posicaosort]);
    // //removo elemento sorteado da lista geral informando o nmr de posição
        lista.splice(posicaosort, 1);
    // //mostro a lista de sorteados no html
        resultado = document.getElementById('resultado');
        resultado.innerHTML = listasort; 
    }else{
        resultado = document.getElementById('acabou');
        resultado.innerHTML = '<h2>Todos os números já foram sorteados</h2>'; 
    }

    }


function limpar(event){
    event.preventDefault()
    lista = []
    listasort = []
    resultado = document.getElementById('resultado');
    resultado.innerHTML = ''
    resultado = document.getElementById('acabou');
    resultado.innerHTML = ''; 
}
var peso;
var altura;
var imc;
var resultado;



function calcular(event){
    event.preventDefault()

    peso = document.getElementById('peso').value;
    altura = document.getElementById('altura').value;

    imc = peso/(altura*altura);

    resultado = document.getElementById('resultado');

    if (imc<=18.5) {
        resultado.innerHTML = 'Seu IMC é ' +imc.toFixed(2)+ ' !' + '<br> Cuidado, você está com baixo peso!';
    } else if (imc>18.5 && imc<=24.9) {
        resultado.innerHTML = 'Seu IMC é ' +imc.toFixed(2)+ ' !'+'<br> Parabéns, você está com seu peso normal!';        
    } else if (imc>24.9 && imc<=29.9) {
        resultado.innerHTML = 'Seu IMC é ' +imc.toFixed(2)+ ' !'+'<br> Cuidado, você está com pré-obesidade!';        
    } else if (imc>29.9 && imc<=34.9) {
        resultado.innerHTML = 'Seu IMC é ' +imc.toFixed(2)+ ' !'+'<br> Cuidado, você está com obesidade grau I!';        
    } else if (imc>34.9 && imc<=39.9) {
        resultado.innerHTML = 'Seu IMC é ' +imc.toFixed(2)+ ' !'+'<br> Cuidado, você está com obesidade grau II!';        
    } else {
        resultado.innerHTML = 'Seu IMC é ' +imc.toFixed(2)+ ' !'+'<br> Cuidado, você está com obesidade grau III!';        
    }
}
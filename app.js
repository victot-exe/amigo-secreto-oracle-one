//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaDeAmigos = [];
let numerosGerados = [];

function adicionarAmigo(){
    let inputName = document.getElementById("amigo");
    let nome = inputName.value;
    
    if(listaDeAmigos.some(n => n.toLowerCase() === nome.toLowerCase())){
        alert(`O nome ${nome} já consta na lista, por favor coloque outro.`);
    }else{
        listaDeAmigos.push(nome);
        inputName.value = "";
        alert(`${nome} foi adicionado a lista.`);
    }
}

function sortearAmigo(){
    //bloquear e limpar a barra de digitar
    //Gerarnumero aleatorio
    //se for -1 bloquear botao de sortear e dizer que os nomes foram sorteados
    //mostrar nome sorteado referente
}

function gerarNumeroAleatorio(){

    if(numerosGerados.length === listaDeAmigos.length){
        return -1;
    }

    let numeroGerado;

    do{
        numeroGerado = Math.floor(Math.random() * listaDeAmigos.length);
    }while(numerosGerados.includes(numeroGerado))
    
    numerosGerados.push(numeroGerado);
    return numeroGerado;
}
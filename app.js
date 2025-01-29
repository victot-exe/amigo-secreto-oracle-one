//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaDeAmigos = [];


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

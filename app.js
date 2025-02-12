//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
const sorteio ={
    listaDeAmigos: [],
    numerosGerados: [],
}

function adicionarAmigo(){
    let inputName = document.getElementById("amigo");
    let nome = inputName.value;
    
    if(!nome.trim()){
        alert("por favor insira um nome válido");
        return;
    }

    if(sorteio.listaDeAmigos.some(n => n.trim().toLowerCase() === nome.trim().toLowerCase())){
        alert(`O nome ${nome} já consta na lista, por favor coloque outro.`);
    }else{
        sorteio.listaDeAmigos.push(nome);
        inputName.value = "";
        alert(`${nome} foi adicionado a lista.`);
    }
}

function sortearAmigo(){

    if(sorteio.listaDeAmigos.length < 3){
        alert("Você precisa de pelo menos três amiguinhos para iniciar o sorteio :)")
        return;
    }

    if(sorteio.numerosGerados.length === 0){
        desativarInput();
        desativarAdicionar();
    }
    
    let numeroGerado = gerarNumeroAleatorio();
    
    if(numeroGerado < 0){
        alert("todos os nomes já foram sorteados");
        reiniciarOJogo();
        return;
    }else{
        alert(`Você tirou o/a ${sorteio.listaDeAmigos[numeroGerado]}`)
    }
    
}

function gerarNumeroAleatorio(){

    if(sorteio.numerosGerados.length === sorteio.listaDeAmigos.length){
        return -1;
    }

    let numeroGerado;

    do{
        numeroGerado = Math.floor(Math.random() * sorteio.listaDeAmigos.length);
    }while(sorteio.numerosGerados.includes(numeroGerado))
    
    sorteio.numerosGerados.push(numeroGerado);
    return numeroGerado;
}

function desativarInput(){
    let inputName = document.getElementById("amigo");
    inputName.value = "";
    inputName.disabled = true;
    inputName.placeholder = "Os nomes já foram definidos";
}

function desativarAdicionar(){
    document.getElementById("adicionar").disabled = true;
}

function reiniciarOJogo(){
    alert("Todos os nomes foram sorteados, reiniciando o jogo...");

    sorteio.listaDeAmigos = [];
    sorteio.numerosGerados = [];

    let inputName = document.getElementById("amigo");
    inputName.disabled = false;
    inputName.placeholder = "Digite um nome";

    document.getElementById("adicionar").disabled = false;
}
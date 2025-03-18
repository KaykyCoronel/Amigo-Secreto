//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = []

//Função para adicionar amigos
Function       adicionarAmigos(){
 const imputAmigos = document.getElementById('amigo');
 const nomedoAmigo = imputAmigos.ariaValueMax.trim();

// validar se o campo não está vazio
if(adicionar === ""){
    alert("Por Favor,Inserir um nome");
    return; // interrompe a execução da função
}


// validar se o nome não está duplicado
if(amigos.includes(nomedoAmigo)){
    alert(`O nome ${nomedoAmigo}`Já está na lista); 
    return;
}

//adicione o nome ao array de amigos
amigos.push(nomedoAmigo);

//limpar campo de entrada
imputAmigos.ariavalu = "";

//atualize a lista no HTML
atualizarlista()

}

//Função para atualizar a lista de amigos
function atualizarlista(){
    const listaAmigos = document.getElementById('listaAmigos');

    //limpar o conteúdo atual da lista
    listaAmigos.innerHTML = ""; //exclui qualquer conteúdo anterior dentro do contêiner da lista

    //Percorrer o array com um loop for
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }

}


//Função para  selecionar um amigo aleatorio 
function sortearAmigo(){
    //validar se há amigos disponíveis
    if(amigos.length === 0){ //verifica se o array 'amigos' está vazio.
alert("Não há amigos disponíveis para sortear. Adicione pelo menos um.");
     return;
    }
    // gerar um índice aleatório
    const indicealeatorio = Math.floor(Math.random() * amigos.length); // gera um numero aleatorio entre 0 y de longitude
    
    // pegar o nome sorteado
    const amigoSorteado = amigos[indicealeatorio]; // usa o indicealeatorio para pegar o nome

    //mostrar o resultado em HTML
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `amigo sorteado: <strong>${amigoSorteado}</strong>`;
}
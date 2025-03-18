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


//Função para  selecionar um amigo aleatorio 
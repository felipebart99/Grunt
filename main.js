function mostrarAlerta() {
    alert("Você clicou no botão!");
}

// Seleciona o botão pelo ID e adiciona um ouvinte de evento para o clique
document.getElementById('meuBotao').addEventListener('click', mostrarAlerta);
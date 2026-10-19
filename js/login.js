// 1. Pegar os elementos do HTML que vamos usar
const inputNome = document.querySelector('.login_input');
const botaoJogar = document.querySelector('.login_button');
const formulario = document.querySelector('.login_form');

// 2. Função para ativar o botão apenas quando o usuário digitar algo
inputNome.addEventListener('input', () => {
    // Se o texto digitado for maior que 2 letras, ativa o botão tirando o 'disabled'
    if (inputNome.value.trim().length > 2) {
        botaoJogar.removeAttribute('disabled');
    } else {
        // Se apagar o texto, desativa o botão de novo
        botaoJogar.setAttribute('disabled', 'true');
    }
});

// 3. Função para quando o usuário clicar em "Jogar" (enviar o formulário)
formulario.addEventListener('submit', (evento) => {
    // Evita que a página recarregue do nada e quebre o código
    evento.preventDefault();

    // Salva o nome digitado na memória do navegador
    localStorage.setItem('Nome', inputNome.value);

    // Redireciona para a página do seu jogo da memória
    // (Ajuste o caminho abaixo com o nome real do seu arquivo HTML do jogo)
    window.location = '/pages/dinamica.html'; 
});
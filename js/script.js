
const botaoTema = document.getElementById("botao-tema");
botaoTema.addEventListener("click", function () {
    document.body.classList.toggle("tema-escuro");

    if (document.body.classList.contains("tema-escuro")) {
        botaoTema.textContent = "☀️";
    } else {
        botaoTema.textContent = "🌙";
    }
});

function enviarMensagem(evento) {
    // Impede que a página seja recarregada
    evento.preventDefault();

    let nome = document.getElementById("nome").value;

    document.getElementById("aviso").innerHTML =
        "Obrigado pela mensagem, " + nome + "!";

    // Limpa os campos do formulário
    document.querySelector(".formulario").reset();
}
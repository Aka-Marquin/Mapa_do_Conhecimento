
const botaoTema = document.getElementById("botao-tema");
botaoTema.addEventListener("click", function () {
    document.body.classList.toggle("tema-escuro");

    if (document.body.classList.contains("tema-escuro")) {
        botaoTema.textContent = "☀️";
    } else {
        botaoTema.textContent = "🌙";
    }
});
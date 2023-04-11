import mudaEstadoDoMenuLateral from "./menuLateral.js";

const botoesDeEstadoDoMenuLateral = document.querySelectorAll("[data-botao-estado]");

botoesDeEstadoDoMenuLateral.forEach(botao => {
    botao.addEventListener("click", () => mudaEstadoDoMenuLateral());
});


import dict from "./api/dict.js";

const rodaApi = document.querySelector("[data-roda-api]");
const resultado = document.querySelector("[data-resultado-api]");

rodaApi.addEventListener("click", evento => {
    evento.preventDefault();

    const palavra = document.querySelector("[data-palavra]").value;

    dict(palavra, resultado)
});

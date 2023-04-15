import url from "./api/url.js";

const rodaApi = document.querySelector("[data-roda-api]");
const resultado = document.querySelector("[data-resultado-api]");

rodaApi.addEventListener("click", evento => {
    evento.preventDefault();

    const urlInput = document.querySelector("[data-url]").value;

    url(urlInput, resultado);
});



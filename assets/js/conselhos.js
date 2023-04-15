import advice from "./api/advice.js";

const rodaApi = document.querySelector("[ data-roda-api]");

rodaApi.addEventListener("click", evento => {
    evento.preventDefault();
    advice()
});

import api from "./api/apod.js";

let count;
let startDate;
let endDate;
let date;
const botaoRodaApi = document.querySelector("[data-roda-api]");
const secao = document.querySelector("[data-resultado-api]");

window.addEventListener("load", () => {
    try {
        botaoRodaApi.addEventListener("click", evento => {
            evento.preventDefault();
            
            count = document.querySelector("[data-count]").value;
            startDate = document.querySelector("[data-start]").value;
            endDate = document.querySelector("[data-end]").value;
            date = document.querySelector("[data-date]").value;
    
            api(date, count, startDate, endDate, secao);
        });    

        api(date, count, startDate, endDate, document.querySelector("[data-sobre-api]"));
    }catch(erro) {
        console.log(erro);
    }
});

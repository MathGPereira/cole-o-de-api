import api from "./api/apod.js";

let thumb;
let count;
let startDate;
let endDate;
let hd;
let date;
const botaoRodaApi = document.querySelector("[data-roda-api]");
const secao = document.querySelector("[data-resultado-api]");

window.addEventListener("load", () => {
    botaoRodaApi.addEventListener("click", evento => {
        evento.preventDefault();
        
        thumb = document.querySelector("[data-thumbs]").checked;
        count = document.querySelector("[data-count]").value;
        startDate = document.querySelector("[data-start]").value;
        endDate = document.querySelector("[data-end]").value;
        hd = document.querySelector("[data-hd]").checked;
        date = document.querySelector("[data-date]").value;

        api(date, hd, count, startDate, endDate, thumb, secao);
        
        count = "";
    });    

    api(date, hd, count, startDate, endDate, thumb, document.querySelector("[data-sobre-api]"));
});

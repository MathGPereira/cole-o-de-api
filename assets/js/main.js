import api from "./api/apod.js";
import qrcode from "./api/qrcode.js";

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

const botaoRodaQrCode = document.querySelector("[data-roda-qrcode]");

botaoRodaQrCode.addEventListener("click", evento => {
    evento.preventDefault();

    const conteudo = document.querySelector("[data-conteudo]").value;
    const tamanho = document.querySelector("[data-tamanho]").value;
    const source = document.querySelector("[data-source]").value;
    const target = document.querySelector("[data-target]").value;
    const ecc = document.querySelector("[data-ecc]").value;
    const cor = document.querySelector("[data-cor]").value.replace("#", "");
    
    qrcode(conteudo, tamanho, source, target, ecc, cor, secao);
});

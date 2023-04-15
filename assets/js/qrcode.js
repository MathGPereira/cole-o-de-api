import qrcode from "./api/qrcode.js";

const botaoRodaQrCode = document.querySelector("[data-roda-qrcode]");
const resultado = document.querySelector("[data-resultado-api]");

botaoRodaQrCode.addEventListener("click", evento => {
    evento.preventDefault();

    const conteudo = document.querySelector("[data-conteudo]").value;
    const tamanho = document.querySelector("[data-tamanho]").value;
    const source = document.querySelector("[data-source]").value;
    const target = document.querySelector("[data-target]").value;
    const ecc = document.querySelector("[data-ecc]").value;
    const cor = document.querySelector("[data-cor]").value.replace("#", "");

    qrcode(conteudo, tamanho, source, target, ecc, cor, resultado);
});

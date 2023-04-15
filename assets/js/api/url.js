export default async function url(url, secao) {
    const urlApi = `https://api.shrtco.de/v2/shorten?url=${url}`;
    const urlResponse = await fetch(urlApi);
    const urlJson = await urlResponse.json();

    if(secao.dataset.resultadoApi === "resultadoApi") {
        secao.innerHTML = "";
    }

    imprimeNaTela(urlJson, secao);
}

function imprimeNaTela(json, secao) {
    console.log(json.result);
}

const sobreApi = document.querySelector("[data-sobre-api]");

url("www.google.com", sobreApi);

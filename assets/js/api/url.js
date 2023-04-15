export default async function url(url, secao) {
    const urlApi = `https://api.shrtco.de/v2/shorten?url=${url}`;
    const urlResponse = await fetch(urlApi);
    const urlJson = await urlResponse.json();

    if(secao.dataset.resultadoApi === "resultadoApi") {
        secao.innerHTML = "";
    }

    imprimeNaTela(urlJson);
}

function imprimeNaTela(json) {
    console.log(json.result);
}
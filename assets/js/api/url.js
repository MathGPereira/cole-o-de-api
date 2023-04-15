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
    const nodeTagContent = `
        <h4 class="link-original">${json.result.original_link}</h4>
        <ul class="link__lista">
            <li class="lista__item">
                <h5 class="item__titulo">${Object.keys(json.result)[1].replace("_", " ")}</h5>
                <a href="${json.result.original_link}" rel="external nofollow" target="_blank">${json.result.short_link}</a>
            </li>
            <li class="lista__item">
                <h5 class="item__titulo">${Object.keys(json.result)[2].replace("_", " ").replace("_", " ")}</h5>
                <a href="${json.result.original_link}" rel="external nofollow" target="_blank">${json.result.full_short_link}</a>
            </li>
            <li class="lista__item">
                <h5 class="item__titulo">${Object.keys(json.result)[3].replace("_", " ")}</h5>
                <a href="${json.result.original_link}" rel="external nofollow" target="_blank">${json.result.short_link2}</a>
            </li>
            <li class="lista__item">
                <h5 class="item__titulo">${Object.keys(json.result)[4].replace("_", " ").replace("_", " ")}</h5>
                <a href="${json.result.original_link}" rel="external nofollow" target="_blank">${json.result.full_short_link2}</a>
            </li>
            <li class="lista__item">
                <h5 class="item__titulo">${Object.keys(json.result)[5].replace("_", " ")}</h5>
                <a href="${json.result.original_link}" rel="external nofollow" target="_blank">${json.result.short_link3}</a>
            </li>
            <li class="lista__item">
                <h5 class="item__titulo">${Object.keys(json.result)[6].replace("_", " ").replace("_", " ")}</h5>
                <a href="${json.result.original_link}" rel="external nofollow" target="_blank">${json.result.full_short_link3}</a>
            </li>
            <li class="lista__item">
                <h5 class="item__titulo">${Object.keys(json.result)[7].replace("_", " ")}</h5>
                <a href="${json.result.original_link}" rel="external nofollow" target="_blank">${json.result.share_link}</a>
            </li>
            <li class="lista__item item__ultimo">
                <h5 class="item__titulo ultimo__titulo">${Object.keys(json.result)[8].replace("_", " ").replace("_", " ")}</h5>
                <a href="${json.result.original_link}" rel="external nofollow" target="_blank">${json.result.full_share_link}</a>
            </li>
        </ul>
    `;

    secao.innerHTML += nodeTagContent;
    console.log(json.result);
}

const sobreApi = document.querySelector("[data-sobre-api]");

url("www.google.com", sobreApi);

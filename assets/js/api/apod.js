export default async function api(data="", hd="false", count="", start_date="", end_date="", thumbs="false", secao) {
    const url = `https://api.nasa.gov/planetary/apod?api_key=D11v7QjGEbaTNyv33dKUWZVE2Dt6qwU9jFca9Uhg&count=${count}`;
    const apod = await fetch(url);
    const apodJSON = await apod.json();

    verificaUrl(data, count, start_date, end_date);
    colocaImagemNaPagina(apodJSON, secao);
}

function colocaImagemNaPagina(urls, secao) {
    if(secao.dataset === "sobreApi") {
        secao.innerHTML = "";
    }

    if(urls.length === 1) {
        const blocoImagemDireito = `
        <div>
            <img src="${urls[0].url}" alt="Exemplo de uma imagem astronômica dada pela API" class="sobre-api__imagem-exemplo" data-imagem-exemplo>
            <h4 class="sobre-api__nome-imagem">Título: ${urls[0].title}</h4>
            <span class="sobre-api__direito-autoral">Autor: ${urls[0].copyright}</span>
            <a href="${urls[0].hdurl}" target="_blank" rel="external" class="sobre-api__link-hd">Link para imagem em HD</a>
        </div>
        `;
        
        secao.innerHTML += blocoImagemDireito;
    }else if(urls.length > 1) {
        urls.forEach(url => {
            const blocoImagemDireito = `
            <div>
                <img src="${url.url}" alt="Exemplo de uma imagem astronômica dada pela API" class="sobre-api__imagem-exemplo" data-imagem-exemplo>
                <h4 class="sobre-api__nome-imagem">Título: ${url.title}</h4>
                <span class="sobre-api__direito-autoral">Autor: ${url.copyright}</span>
                <a href="${url.hdurl}" target="_blank" rel="external" class="sobre-api__link-hd">Link para imagem em HD</a>
            </div>
            `;

            secao.innerHTML += blocoImagemDireito;
        });
    }else {
        const blocoImagemDireito = `
        <div>
            <img src="${urls.url}" alt="Exemplo de uma imagem astronômica dada pela API" class="sobre-api__imagem-exemplo" data-imagem-exemplo>
            <h4 class="sobre-api__nome-imagem">Título: ${urls.title}</h4>
            <span class="sobre-api__direito-autoral">Autor: ${urls.copyright}</span>
            <a href="${urls.hdurl}" target="_blank" rel="external" class="sobre-api__link-hd">Link para imagem em HD</a>
        </div>
        `;
        
        secao.innerHTML += blocoImagemDireito;
    }
}

function verificaUrl() {

}

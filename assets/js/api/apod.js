async function api(data="", hd="false", count="", start_date="", end_date="", thumbs="false") {
    const url = `https://api.nasa.gov/planetary/apod?api_key=D11v7QjGEbaTNyv33dKUWZVE2Dt6qwU9jFca9Uhg&count=${count}`;
    const apod = await fetch(url);
    const apodJSON = await apod.json();

    colocaImagemNaPagina(apodJSON);
}

function colocaImagemNaPagina(urls) {
    const secao = document.querySelector("[data-sobre-api]");

    if(urls.length === 1) {
        const imagem = `
            <img src="${urls[0].url}" alt="Exemplo de uma imagem astronômica dada pela API" class="sobre-api__imagem-exemplo" data-imagem-exemplo>
        `;
        
        secao.innerHTML += imagem;
    }else if(urls.length > 1) {
        urls.forEach(url => {
            const imagem = `
                <img src="${url.url}" alt="Exemplo de uma imagem astronômica dada pela API" class="sobre-api__imagem-exemplo" data-imagem-exemplo>
            `;

            secao.innerHTML += imagem;
        });
    }else {
        const imagem = `
            <img src="${urls.url}" alt="Exemplo de uma imagem astronômica dada pela API" class="sobre-api__imagem-exemplo" data-imagem-exemplo>
        `;
        
        secao.innerHTML += imagem;
    }
}

api();

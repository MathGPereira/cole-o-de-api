export default async function dict(palavra, secao) {
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${palavra}`;
    const significado = await fetch(url);
    const significadoJson = await significado.json();

    if(secao.dataset.resultadoApi === "resultadoApi") {
        secao.innerHTML = "";
    }

    testaJson(significadoJson[0], secao);
}

function testaJson(json, secao) {
    palavra(json.word, secao);
    fonetica(json.phonetics, secao);
    significados(json.meanings, secao);
    licensa(json.license, secao);
    fonteUrls(json.sourceUrls, secao);
}

function palavra(palavra, secao) {
    const nodeTagTitulo = `
        <h4 class="sobre-api__titulo-exemplo">Palavra:</h4>
        <p class="sobre-api__palavra">${palavra}</p>
    `;

    secao.innerHTML += nodeTagTitulo;
}

function fonetica(sons, secao) {
    sons.forEach(som => {
        if(som.audio !== "") {
            const nodeTagAudio = `
                <h5 class="audio__titulo">Áudio(s): </h5>
                <audio src="${som.audio}" class="audio" controls></audio>
                <div class="licensa__links">
                    <a href="${som.license.url}" rel="external nofollow" target="_blank" class="licensa__link">${som.license.name}</a>
                </div>
            `;

            secao.innerHTML += nodeTagAudio;
        }
    });
}

function significados(significados, secao) {
    significados.forEach(significado => {
        if(significado.antonyms.length > 0) {
            const ul = document.createElement("ul");

            significado.antonyms.forEach(antonimo => {
                const li = document.createElement("li");

                li.innerHTML +=  `${antonimo}`;
                ul.appendChild(li);
            });

            const titulo = "<h5 class='antonimo__titulo'>Antônimos:</h5>";

            ul.setAttribute("class", "lista__antonimos");

            secao.innerHTML += titulo;
            secao.appendChild(ul);
        }

        if(significado.synonyms.length > 0) {
            const ul = document.createElement("ul");

            significado.synonyms.forEach(sinonimo => {
                const li = document.createElement("li");

                li.innerHTML +=  `${sinonimo}`;
                ul.appendChild(li);
            });

            const titulo = "<h5 class='antonimo__titulo'>Sinônimos:</h5>";

            ul.setAttribute("class", "lista__sinonimos");
            secao.innerHTML += titulo;

            secao.appendChild(ul);
        }

        if(significado.definitions.length > 0) {
            const ul = document.createElement("ul");

            significado.definitions.forEach(definicao => {
                const li = document.createElement("li");

                li.innerHTML += `${definicao.definition}`;

                li.setAttribute("class", "item__definicao");
                ul.appendChild(li);
            });

            const titulo = "<h5 class='antonimo__definicoes'>Definições:</h5>";
            const tipo = `<p class='definicoes__tipo'>${significado.partOfSpeech}</p>`;

            ul.setAttribute("class", "lista__definicoes");
            secao.innerHTML += titulo;
            secao.innerHTML += tipo;

            secao.appendChild(ul);
        }
    });
}

function licensa(license, secao) {
    const nome = license.name;
    const url = license.url;
    const h5 = document.createElement("h5");
    const a = document.createElement("a");

    h5.innerHTML = nome;
    a.setAttribute("href", url);

    const titulo = "<h5 class='antonimo__definicoes'>Licensa:</h5>";
    a.innerHTML = "Origem";

    secao.innerHTML += titulo;
    secao.appendChild(h5);
    secao.appendChild(a);
}

function fonteUrls(urls, secao) {
    const copyright = urls[0];
    const a = document.createElement("a");

    a.setAttribute("href", copyright);
    a.innerHTML = "Fonte";

    secao.appendChild(a);
}

const sobreApi = document.querySelector("[data-sobre-api]");

dict("breast", sobreApi);

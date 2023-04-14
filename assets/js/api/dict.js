async function dict(palavra) {
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${palavra}`;
    const significado = await fetch(url);
    const significadoJson = await significado.json();

    testaJson(significadoJson[0]);
}

function testaJson(json) {
    palavra(json.word);
    fonetica(json.phonetics);
    significados(json.meanings);
    licensa(json.license);
    fonteUrls(json.sourceUrls);
}

function palavra(palavra) {
    const nodeTagTitulo = `
        <h4 class="sobre-api__titulo-exemplo">Palavra:</h4>
        <p class="sobre-api__palavra">${palavra}</p>
    `;

    sobreApi.innerHTML += nodeTagTitulo;
}

function fonetica(sons) {
    sons.forEach(som => {
        if(som.audio !== "") {
            const nodeTagAudio = `
                <h5 class="audio__titulo">Áudio(s): </h5>
                <audio src="${som.audio}" class="audio" controls></audio>
                <div class="licensa__links">
                    <a href="${som.license.url}" rel="external nofollow" target="_blank" class="licensa__link">${som.license.name}</a>
                    <a href="${som.license.sourceUrl}" rel="external nofollow" target="_blank" class="licensa__link">Origem</a>
                </div>
            `;

            sobreApi.innerHTML += nodeTagAudio;
        }
    });
}

function significados(significados) {
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

            sobreApi.innerHTML += titulo;
            sobreApi.appendChild(ul);
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
            sobreApi.innerHTML += titulo;

            sobreApi.appendChild(ul);
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
            sobreApi.innerHTML += titulo;
            sobreApi.innerHTML += tipo;

            sobreApi.appendChild(ul);
        }
    });
}

function licensa(license) {
    const nome = license.name;
    const url = license.url;
    const h5 = document.createElement("h5");
    const a = document.createElement("a");

    h5.innerHTML = nome;
    a.setAttribute("href", url);

    const titulo = "<h5 class='antonimo__definicoes'>Licensa:</h5>";
    a.innerHTML = "Origem";

    sobreApi.innerHTML += titulo;
    sobreApi.appendChild(h5);
    sobreApi.appendChild(a);
}

function fonteUrls(urls) {
    const copyright = urls[0];
    const a = document.createElement("a");

    a.setAttribute("href", copyright);
    a.innerHTML = "Fonte";

    sobreApi.appendChild(a);
}

const sobreApi = document.querySelector("[data-sobre-api]");

dict("breast");

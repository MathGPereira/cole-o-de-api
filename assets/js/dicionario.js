async function dict(palavra) {
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${palavra}`;
    const significado = await fetch(url);
    const significadoJson = await significado.json();

    trataJson(significadoJson[0]);
    // imprimeNaTela()
}

function trataJson(json) {
    console.log(json);
}

dict("Breast");

async function dict(palavra) {
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${palavra}`;
    const significado = await fetch(url);
    const significadoJson = await significado.json();

    trataJson(significadoJson);
    imprimeNaTela()
}

dict();
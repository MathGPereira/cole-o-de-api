export default async function advice() {
    const url = "https://api.adviceslip.com/advice";
    const conselho = await fetch(url);
    const conselhosJson = await conselho.json();

    imprimeNaTela(conselhosJson.slip.advice);
}

function imprimeNaTela(conselho) {
    const resultadoApi = document.querySelector("[ data-resultado-api]");

    resultadoApi.innerHTML = `
        <p class="conselhos">${conselho}</p>
    `;
}

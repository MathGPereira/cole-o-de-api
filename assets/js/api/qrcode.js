export default async function qrcode(informacao, tamanho=200, charsetSource="UTF-8", charsetTarget="UTF-8", ecc="L", cor, secao) {
    const url = `http://api.qrserver.com/v1/create-qr-code/?data=${informacao}&size=${tamanho}x${tamanho}&charset-source=${charsetSource}&charset-target=${charsetTarget}&bgcolor=${cor}&ecc=${ecc}`;
    const qr = await fetch(url);

    colocaQrCodeNaTela(qr, secao);
}

function colocaQrCodeNaTela(qr, secao) {
    secao.innerHTML = "";

    const qrCodeGerado = `
        <img src="${qr.url}" alt="Código de barras do tipo QR Code" class="imagem-qrcode">
        <a href="https://goqr.me/api/doc/create-qr-code/" target="_blank" rel="nofollow external" class="sobre-api__link-hd sobre-api__link-qr">Link para a documentação</a>
    `;

    secao.innerHTML += qrCodeGerado;
}

qrcode("Bem vindo a Galeria e API's", 200, "UTF-8", "UTF-8", "L", "FFFFFF", document.querySelector("[data-sobre-api]"));

async function qrcode(informacao, tamanho="", secao) {
    const url = `http://api.qrserver.com/v1/create-qr-code/?data=${informacao}&size=${tamanho}x${tamanho}`;
    const qr = await fetch(url);

    colocaQrCodeNaTela(qr, secao);
}

function colocaQrCodeNaTela(qr, secao) {
    const qrCodeGerado = `
        <img src="${qr.url}" alt="Código de barras do tipo QR Code" class="imagem-qrcode">
        <a href="https://goqr.me/api/doc/create-qr-code/" target="_blank" rel="nofollow external" class="sobre-api__link-hd">Link para a documentação</a>
    `;
    secao.innerHTML += qrCodeGerado;
}

qrcode("Bem vindo a Galeria e API's", 200, document.querySelector("[data-sobre-api]"));

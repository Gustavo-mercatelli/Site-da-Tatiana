function sim() {
    alert("Você aceitou por pra jogo, o Xibiu :) Clica em Ok");

    // Abre o link em uma nova guia após 1 segundo, independente da confirmação do alerta
    setTimeout(function() {
        window.open("https://www.youtube.com/watch?v=87BDjYTTuTw", "_blank"); // Altere o link para o vídeo específico do YouTube que você deseja
    }, 1000); // 1000 milissegundos = 1 segundo
}

function Desvia(t) {
    console.log("Opa, desviei...");
    var btn = t;
    btn.style.position = 'absolute';
    btn.style.bottom = geraPosicao(10, 90);
    btn.style.left = geraPosicao(10, 90);
}

function geraPosicao(min, max) {
    return Math.random() * (max - min) + min + "%";
}
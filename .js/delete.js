var botaoExcluir = document.querySelectorAll('.excluir');
let ListaDeBotoes = []


for (var i = 0; i < ListaDeBotoes.length; i++) {
    ListaDeBotoes[i].addEventListener("click", function (event) {
        var alvo = event.target;
        var paiAlvo = alvo.parentNode;
        paiAlvo.remove();
    })
}




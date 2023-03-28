var botaoDelete = document.querySelectorAll('.excluir');

for (var i = 0; i < botaoDelete.length; i++){
    botaoDelete[i].addEventListener("click", function (event) {
        var alvo = event.target;
        var paiAlvo = alvo.parentNode;
        paiAlvo.remove();
    })
}



// botaoDelete.addEventListener("click", function (event) {
//     var alvo = event.target;
//     var paiAlvo = alvo.parentNode;
//     paiAlvo.remove();
// })

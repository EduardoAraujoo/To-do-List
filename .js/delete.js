var botaoDelete = document.querySelectorAll('.excluir');

botaoDelete.forEach(function(){
    addEventListener("click", function (event) {
        var alvo = event.target;
        var paiAlvo = alvo.parentNode;
        paiAlvo.remove();
    })});




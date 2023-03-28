var ulList = document.querySelector("ul");

ulList.addEventListener("click", function (event) {
    var alvo = event.target;
    var paiAlvo = alvo.parentNode;
    paiAlvo.remove();
})


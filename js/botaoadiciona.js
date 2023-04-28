
const botaoAdicionar = document.querySelector("#botao");

var valida = document.querySelector("#validando");
var input = document.querySelector("#principal")
var form = document.querySelector("#form");

botaoAdV = false;

form.addEventListener("submit", function (event) {
    event.preventDefault();
    botaoAdV = true;

    if (input.value !== "") {
        valida.classList.add("valida");
        createLiWithTask(input);
        
        form.reset();
    } else {
        valida.classList.remove("valida");
    }
})



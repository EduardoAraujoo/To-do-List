const botaoAdicionar = document.querySelector("#botao");
botaoAdV = false;
var valida = document.querySelector("#validando");


botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault();
    botaoAdV = true;
    var form = document.querySelector("#form");
        if (form.principal.value !== "") {
            valida.classList.add("valida");
            createLiWithTask(form);
            updateTarefas();
            form.reset();
        } else {
            valida.classList.remove("valida");
        }
})
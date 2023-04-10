const botaoAdicionar = document.querySelector("#botao");
botaoAdV = false;

botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault();
    botaoAdV = true;
    var form = document.querySelector("#form");

    if (form.principal.value === "") {
        var valida = document.querySelector("#validando");
        valida.classList.remove("valida");
    } else {
        createLiWithTask(form);
        var textoValidador = document.querySelector("#validando")
        textoValidador.innerHTML = "";
    }
    updateTarefas();
    form.reset();   
})
const botaoAdicionar = document.querySelector("#botao");

botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault();

    var form = document.querySelector("#form");

    if (form.principal.value === "") {
        var valida = document.querySelector("#validando");
        valida.classList.remove("valida");
        console.log("String vazia")
    } else {
        createLiWithTask(form);
        var textoValidador = document.querySelector("#validando")
        textoValidador.innerHTML = "";
    }
    form.reset();    
})






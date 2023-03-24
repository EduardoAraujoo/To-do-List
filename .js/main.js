const botaoAdicionar = document.querySelector("#botao");

botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault();

    var form = document.querySelector("#form");
    createLiWithTask(form);
})

function createLiWithTask(form) {
    var ul = document.getElementById("ul");
    var tarefaLi = document.createElement("li");
    tarefaLi.classList.add("invisivel");
    tarefaLi.classList.add("tarefa");
    tarefaLi.classList.add("tipo-de-texto");
    tarefaLi.textContent = form.principal.value;
    ul.appendChild(tarefaLi);
    //tarefaLi.appendChild(botaoDeletador);
}


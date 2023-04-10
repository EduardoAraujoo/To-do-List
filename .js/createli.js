function createLiWithTask(form) {
    if (botaoAdV == true) {
        var ul = document.getElementById("ul");
        var botaoExcluir = document.createElement("button");
        var checkBox = document.createElement("input");

        botaoExcluir.addEventListener("click", (event) => {
            var alvo = event.target;
            var paiAlvo = alvo.parentNode;
            paiAlvo.remove();
            updateTarefas();
        })

        //ADICIONANDO CLASSES E TYPES   

        botaoExcluir.classList.add("excluir")
        botaoExcluir.innerHTML = "X";
        ListaDeBotoes.push(botaoExcluir);

        checkBox.classList.add("check");
        checkBox.type = 'checkbox';

        checkBox.addEventListener('change', function () {
            if (this.checked) {
                tarefas.classList.add("risca");
            } else {
                tarefas.classList.remove("risca");
            }
        });

        var tarefas = document.createElement("li");

        tarefas.classList.add("invisivel");
        tarefas.classList.add("tarefa");
        tarefas.classList.add("tipo-de-texto");
        tarefas.textContent = form.principal.value;

        //AFILIANDO 

        ul.appendChild(tarefas);
        tarefas.appendChild(checkBox);
        tarefas.appendChild(botaoExcluir);

        

    } else {}
}









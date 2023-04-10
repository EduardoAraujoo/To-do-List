function createLiWithTask(form) {
    if (botaoAdV == true) {
        var ul = document.getElementById("ul");
        var botaoExcluir = document.createElement("button");
        var checkBox = document.createElement("input");

        botaoExcluir.addEventListener("click", (event) => {
            var alvo = event.target;
            var paiAlvo = alvo.parentNode;
            paiAlvo.remove();
        })

        //ADICIONANDO CLASSES E TYPES   

        botaoExcluir.classList.add("excluir")
        botaoExcluir.innerHTML = "X";
        ListaDeBotoes.push(botaoExcluir);

        checkBox.classList.add("check");
        checkBox.type = 'checkbox';

        checkBox.addEventListener('change', function () {
            if (this.checked) {
                tarefaLi.classList.add("risca");
            } else {
                tarefaLi.classList.remove("risca");
            }
        });

        var tarefaLi = document.createElement("li");

        tarefaLi.classList.add("invisivel");
        tarefaLi.classList.add("tarefa");
        tarefaLi.classList.add("tipo-de-texto");
        tarefaLi.textContent = form.principal.value;

        //AFILIANDO 

        ul.appendChild(tarefaLi);
        tarefaLi.appendChild(checkBox);
        tarefaLi.appendChild(botaoExcluir);

    } else {}
}







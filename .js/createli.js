

function createLiWithTask(input, tarefasLocal) {
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
                tarefasLocal.classList.add("risca");
            } else {
                tarefasLocal.classList.remove("risca");
            }
        });

        tarefasLocal = document.createElement("li");
        tarefasLocal.textContent = input.value;
        tarefasLocal.classList.add("invisivel");
        tarefasLocal.classList.add("tarefa");
        tarefasLocal.classList.add("tipo-de-texto");

        //AFILIANDO 

        ul.appendChild(tarefasLocal);
        tarefasLocal.appendChild(checkBox);
        tarefasLocal.appendChild(botaoExcluir);
    } else { }
}












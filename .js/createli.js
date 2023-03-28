function createLiWithTask(form) {
    var ul = document.getElementById("ul");
    
    var botaoExcluir = document.createElement("button");
    botaoExcluir.classList.add("excluir");
    botaoExcluir.innerHTML = "X";
    
    var tarefaLi = document.createElement("li");
    
    tarefaLi.classList.add("invisivel");
    tarefaLi.classList.add("tarefa");
    tarefaLi.classList.add("tipo-de-texto");
    tarefaLi.textContent = form.principal.value;
    
    
    ul.appendChild(tarefaLi);
    tarefaLi.appendChild(botaoExcluir);
}

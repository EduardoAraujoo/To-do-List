const botaoAdicionar = document.querySelector("#botao");
var form = document.querySelector("#form");


form.addEventListener("submit", function (event) {
    event.preventDefault();

    var tarefa = colocarTarefa(form);
    console.log(tarefa);

    adicionaTarefa(tarefa);

})

function colocarTarefa(form) {
    var tarefa = {
        tarefa: form.target.elements,
    }
    JSON.stringify(tarefa);
    return tarefa
}
function adicionaTarefa(tarefa){
var tarefaLi = CreateLi(tarefa);
var ul = document.querySelector("#mae");
ul.appendChild(tarefaLi);
}
function CreateLi(tarefa){
var tarefaLi = document.createElement("li");
tarefaLi.classList.add("tarefa")
return tarefaLi
}
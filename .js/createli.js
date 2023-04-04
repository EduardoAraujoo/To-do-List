var botaoExcluir = document.querySelectorAll(".excluir");
let ListaDeBotoes = [];
console.log(typeof botaoExcluir);
var botaoExV = false;



var obj = new Object(

    li = createLiWithTask(form),




    // function deleteTarefa(botaoExcluir) {
    //      for (var i = 0; i < ListaDeBotoes.length; i++) {
    //         botaoExcluir[i].addEventListener("click", function (event) {
    //             

    //             console.log("bom dia")
    //         })
    //     }
    // }

);
// for (var i = 0; i < botaoExcluir.length; i++) {
//     const botao = botaoExcluir[i];
//     botao.addEventListener("click", function () {
// const item = this.parentNode;
//             item.remove();
//         console.log("fui clicado");
//     })
// };



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

        botaoExcluir.classList.add("excluir")
        botaoExcluir.innerHTML = "X";
        ListaDeBotoes.push(botaoExcluir);

        checkBox.classList.add("check");
        checkBox.type = 'checkbox';

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

console.log(ListaDeBotoes);






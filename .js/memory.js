const localStorageTarefas = JSON.parse(localStorage.getItem('tarefas'));
let tarefas = localStorage.getItem('tarefas') !== null ? localStorageTarefas : [];

const updateTarefas = () => {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
}

const localStorageName = 'To-do-Tarefas';


let values = JSON.parse(localStorage.getItem(localStorageName) || "[]");
values.push({
    name: form.value,
});
localStorage.setItem(localStorageName, JSON.stringify(values)); 
memoriaDoSite();

function memoriaDoSite(){
    let values = JSON.parse(localStorage.getItem(localStorageName) || "[]");
    let list = document.querySelector("ul");
    list.innerHTML = '';

    for(let i = 0; i < values.length; i++){
        list.innerHTML = `<li/> ${values[i] ['name']} <li/>`
    }
}
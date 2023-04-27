var body = document.querySelector("body");
var sun = document.querySelector(".gg-sun");
var moon = document.querySelector(".gg-moon");
var buttonToggle = document.querySelector("")

var i = document.getElementById("trocar");

i.addEventListener("click", () => {
    body.classList.toggle("dark-theme");

    if (i.classList.contains("gg-moon") == true) {
        i.classList.remove("gg-moon");
        i.classList.add("gg-sun");
        
    } else if (i.classList.contains("gg-sun") == true) {
        i.classList.add("gg-moon");
        i.classList.remove("gg-sun");
    }
    else {
        console.log("deu erro");
    }
});
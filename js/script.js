var hamburguer = document.querySelector(".hamburguer");
hamburguer.addEventListener("click", function(){
    document.querySelector(".container").classList.toggle("show-menu");
});


$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000', {placeholder: '(__) _____-____'})
});


function redirecionar() {
    setTimeout(function() { 
        window.location.href = "http://127.0.0.1:5500/index.html";
    }, 6000);
}
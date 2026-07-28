const abrir = document.getElementById("abrirChat");
const cerrar = document.getElementById("cerrarChat");
const chatbot = document.getElementById("chatbot");

abrir.addEventListener("click", function(){

    chatbot.style.display = "flex";

});

cerrar.addEventListener("click", function(){

    chatbot.style.display = "none";

});

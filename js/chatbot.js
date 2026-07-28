// ===============================
// CHATBOT ORO VERDE
// ===============================

const abrirChat = document.getElementById("abrirChat");
const cerrarChat = document.getElementById("cerrarChat");
const chatOverlay = document.getElementById("chatOverlay");

// Abrir chatbot
abrirChat.addEventListener("click", function (e) {

    e.preventDefault();

    chatOverlay.style.display = "flex";

});

// Cerrar chatbot
cerrarChat.addEventListener("click", function () {

    chatOverlay.style.display = "none";

});

// Cerrar al hacer clic fuera de la ventana
chatOverlay.addEventListener("click", function (e) {

    if (e.target === chatOverlay) {

        chatOverlay.style.display = "none";

    }

});

// Cerrar con la tecla ESC
document.addEventListener("keydown", function (e) {

    if (e.key === "Escape") {

        chatOverlay.style.display = "none";

    }

});

//==============================
// CHATBOT ORO VERDE
//==============================

const abrirChat = document.getElementById("abrirChat");
const cerrarChat = document.getElementById("cerrarChat");
const chatOverlay = document.getElementById("chatOverlay");

const chatBody = document.getElementById("chatBody");
const chatInput = document.getElementById("chatInput");
const chatEnviar = document.getElementById("chatEnviar");

//==============================
// Formulario oculto
//==============================

const chatForm = document.getElementById("chatForm");

const correoNombre = document.getElementById("correoNombre");
const correoTipo = document.getElementById("correoTipo");
const correoMensaje = document.getElementById("correoMensaje");

let paso = 1;

let nombre = "";
let tipo = "";
let mensaje = "";

//==============================
// Abrir
//==============================

abrirChat.addEventListener("click", function(e){

    e.preventDefault();

    chatOverlay.style.display="flex";

    iniciarChat();

});

//==============================
// Cerrar
//==============================

cerrarChat.addEventListener("click",function(){

    chatOverlay.style.display="none";

});

chatOverlay.addEventListener("click",function(e){

    if(e.target===chatOverlay){

        chatOverlay.style.display="none";

    }

});

//==============================

function iniciarChat(){

    paso=1;

    chatBody.innerHTML="";

    agregarBot("👋 ¡Hola!<br><br>Bienvenido al asistente virtual de la Planilla ORO VERDE.<br><br>¿Cuál es tu nombre?");

    chatInput.value="";

    chatInput.focus();

}

//==============================

function agregarBot(texto){

    chatBody.innerHTML +=
    `<div class="bot">${texto}</div>`;

    chatBody.scrollTop=chatBody.scrollHeight;

}

function agregarUsuario(texto){

    chatBody.innerHTML +=
    `<div class="user">${texto}</div>`;

    chatBody.scrollTop=chatBody.scrollHeight;

}

//==============================
// Botones de selección
//==============================

function mostrarOpciones(){

    chatBody.innerHTML += `

    <div class="opcionesChat">

        <button onclick="seleccionarTipo('Propuesta')">
            📄 Propuesta
        </button>

        <button onclick="seleccionarTipo('Comentario')">
            💬 Comentario
        </button>

    </div>

    `;

    chatBody.scrollTop=chatBody.scrollHeight;

}

function seleccionarTipo(valor){

    tipo=valor;

    agregarUsuario(valor);

    paso=3;


    if(tipo==="Propuesta"){

        agregarBot("Perfecto.<br><br>Escribe tu propuesta.");

    }
    else{

        agregarBot("Perfecto.<br><br>Escribe tu comentario.");

    }

}
//==============================

chatEnviar.addEventListener("click",procesar);

chatInput.addEventListener("keypress",function(e){

    if(e.key==="Enter"){

        procesar();

    }

});

//==============================

function procesar(){

    let texto=chatInput.value.trim();

    if(texto==="") return;

    agregarUsuario(texto);

    chatInput.value="";

    switch(paso){

        case 1:

            nombre=texto;

            paso=2;

            agregarBot(
"Mucho gusto <b>"+nombre+"</b> 😊<br><br>¿Qué deseas enviar?"
);

mostrarOpciones();
        break;

        case 2:

            if(texto==="1"){

                tipo="Propuesta";

                paso=3;

                agregarBot("Perfecto.<br><br>Escribe tu propuesta.");

            }

            else if(texto==="2"){

                tipo="Comentario";

                paso=3;

                agregarBot("Perfecto.<br><br>Escribe tu comentario.");

            }

            else{

                agregarBot("Por favor escribe solamente 1 o 2.");

            }

        break;

        case 3:

            mensaje=texto;

            agregarBot("✅ Gracias <b>"+nombre+"</b>.<br><br>Tu "+tipo.toLowerCase()+" está lista para enviarse.");

            // Llenar el formulario oculto
correoNombre.value = nombre;
correoTipo.value = tipo;
correoMensaje.value = mensaje;

// Esperar un momento para que el usuario lea el mensaje
setTimeout(function () {

    agregarBot("📨 Enviando tu información...");


    setTimeout(function () {


        fetch(chatForm.action, {

            method: "POST",

            body: new FormData(chatForm)

        })

        .then(response => {


            agregarBot("✅ ¡Tu información fue enviada correctamente!");


            setTimeout(function(){

                agregarBot("Gracias por participar en la Planilla ORO VERDE 🌱");

            },1000);


        })

        .catch(error => {


            agregarBot("❌ Ocurrió un error al enviar la información.");

            console.error("Error:", error);


        });


    },1200);


},800);

            break;

    }

}

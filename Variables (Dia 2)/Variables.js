/* Las variables son los bloques básicos de construcción de cualquier sistema y son esenciales para procesar cualquier tipo de información,
 ya sea de una persona que ha iniciado sesión en el sistema o incluso para mostrar detalles de productos en un catálogo de comercio 
 electrónico.

Por eso, hoy te voy a enseñar a desarrollar un programa simulando una de esas aplicaciones. Debe pedir al usuario responder 3 preguntas:

- ¿Cuál es tu nombre?
- ¿Cuántos años tienes?
- ¿Qué lenguaje de programación estás estudiando?

A medida que se hagan las preguntas, la persona que esté usando el programa debe responder cada una de ellas.

Al final, el sistema mostrará el mensaje:

"Hola [nombre], tienes [edad] años y ya estás aprendiendo [lenguaje]!"

Observa que cada información entre [ ] es una de las respuestas dadas por la persona. */

function obtenerDatos() {
    const nombre = document.getElementById("nombreUsuario").value;
    const edad = document.getElementById("edadUsuario").value;
    const lenguaje = document.getElementById("lenguajeUsuario").value;

    const mensaje = `Hola ${nombre}, tienes ${edad} años y ya estás aprendiendo ${lenguaje}!`;
    document.getElementById("mensajeUsuario").textContent = mensaje;

    document.getElementById("preguntaTexto").textContent = `¿Te gusta estudiar ${lenguaje}?`;
    document.getElementById("preguntaContainer").style.display = "block";
    document.getElementById("reiniciar").disabled = false;
}

function responderPregunta(respuesta) {
    const respuestaMensaje = respuesta === 1 
        ? "¡Muy bien! Sigue estudiando y tendrás mucho éxito." 
        : "Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?";

        
    document.getElementById("mensajeUsuarioDos").textContent = respuestaMensaje;
    document.getElementById("preguntaContainer").style.display = "none";
}

function reiniciarFormulario() {
    document.getElementById("nombreUsuario").value = '';
    document.getElementById("edadUsuario").value = '';
    document.getElementById("lenguajeUsuario").value = '';
    document.getElementById("preguntaContainer").style.display = "none";
    document.getElementById("mensajeUsuario").textContent = '';
    document.getElementById("mensajeUsuarioDos").textContent = '';
    document.getElementById("reiniciar").disabled = true;
}

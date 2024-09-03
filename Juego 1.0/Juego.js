function escogerEspecialidad(especialidad, boton) {
    const mensaje = especialidad === "Front-end"
        ? "En esta especialidad podrás aprender React o Vue."
        : "En esta especialidad podrás aprender C# o Java.";

    document.getElementById("mensajeUsuarioUno").textContent = mensaje;

    // Remarca el botón seleccionado
    document.getElementById("btnFrontend").classList.remove('selected');
    document.getElementById("btnBackend").classList.remove('selected');
    boton.classList.add('selected');

    // Mostrar la siguiente sección
    document.getElementById("especializacionSection").style.display = "block";
}

function responderEspecializacion(opcion, boton) {
    const mensaje = opcion === "Especializarme"
        ? "¡Muy bien! Seguir en tu área te da la oportunidad de profundizar en tu campo."
        : "¡Felicidades! Es una buena elección si quieres aprender de las dos áreas.";

    document.getElementById("mensajeUsuarioDos").textContent = mensaje;

    // Remarca el botón seleccionado
    document.getElementById("btnEspecializarme").classList.remove('selected');
    document.getElementById("btnFullStack").classList.remove('selected');
    boton.classList.add('selected');

    // Mostrar la siguiente sección
    document.getElementById("tecnologiasSection").style.display = "block";
}

function agregarTecnologia() {
    const tecnologia = document.getElementById("tecnologiaInput").value;
    if (tecnologia) {
        const lista = document.getElementById("listaTecnologias");
        const nuevoItem = document.createElement("li");
        nuevoItem.textContent = `¡Aprender ${tecnologia} te será muy útil!`;
        lista.appendChild(nuevoItem);

        // Limpiar el input
        document.getElementById("tecnologiaInput").value = "";
    } else {
        alert("Por favor, ingresa una tecnología.");
    }
}

function finalizar() {
    document.getElementById("mensajeFinal").style.display = "block";
    document.getElementById("btnAgregarTecnologia").classList.add('disabled');
    document.getElementById("btnAgregarTecnologia").disabled = true; // Inhabilitar el botón
}

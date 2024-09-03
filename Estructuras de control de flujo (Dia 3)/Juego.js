const especialidad = prompt ("Que especialidad te gustaría aprender Front-end o Back-end?")

if (especialidad == "Front-end") {
    alert("En esta especialidad podrás aprender React o Vue")
} else if (especialidad == "Back-end") {
    alert("En esta especialidad podrás aprender C# o Java");
}   else {
        alert("Especialidad no válida");
}

const especializacion = prompt ("¿Te gustaría seguir especializándote en tu área elegida o desarrollarte como FullStack?")

if (especializacion === "FullStack") {
    alert("¡Felicidades! Es una buena elección si quieres aprender de las dos áreas.")
}   else if (especializacion === "especializarme") {
    alert("¡Muy bien! Seguir en tu área te da la oportunidad de profundizar en tu campo")
}   else {
    alert("Elección no válida")
}


let continuar = "Si";
while (continuar === "Si") {
let tecnologia = prompt ("¿Qué tecnología te gustaría aprender?")
    alert (`¡Aprender ${tecnologia} te será muy útil`)
    continuar = prompt ("¿Hay alguna otra tecnología que quisieras aprender? (Responde 'Si' para continuar o 'No' para finalizar)")
}
alert ("¡Gracias por participar! Sigue aprendiendo lo que te apasiona")




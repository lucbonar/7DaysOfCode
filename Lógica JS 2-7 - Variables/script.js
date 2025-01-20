let nombre = prompt("¿Cuál es tu nombre?")
let edad = prompt("¿Cuántos años tienes?")
let lenguaje = prompt("¿Que lenguaje de programación estás estudiando?")

alert(`Hola ${nombre}, tienes ${edad} años y ya estás aprendiendo ${lenguaje}!`)

let respuesta = prompt(`¿Te gusta estudiar ${lenguaje}? Responde con el número 1 para SÍ o 2 para NO.`)

switch (respuesta) {
    case "1":
        alert("¡Muy bien! Sigue estudiando y tendrás mucho éxito.")
        break;
    case "2":
        alert("Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?")
        break;
    default:
        alert("Oh, no ingresaste un opcion valida")
}
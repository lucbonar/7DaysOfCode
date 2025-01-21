let numGenerado = Math.floor(Math.random() * (11 - 0) + 0)
alert(numGenerado)
let numElegido = ""
alert("Bienvenido al Juego de Adivinar!")
for (let intentos=2; intentos>=0; intentos--) {
    numElegido = prompt("¿En que numero estoy pensando?")
    if (numElegido == numGenerado) {
        alert(`Acertaste! El numero: ${numElegido}, es el que tenía en mente!  Wow Eres Adivino!`)
        break
    } else {
        alert(`Ops.. No era el numero. te quedan: ${intentos} intentos`)
    }
}
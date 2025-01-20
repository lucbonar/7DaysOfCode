let tecnologia = ""
let especialidad = prompt("¿En que Area te gustaria especializarte, Front-End o Back-end")
while(true) {
        if (especialidad ==="Front-End") {
            tecnologia = prompt("¿Queres aprender Reac o Vue?")
            if(tecnologia === "Reac"|| tecnologia === "Vue") {
                break
            } else {
                alert("No ingreso una tecnologia valida!")
            }
        } else if(especialidad ==="Back-End") {
            tecnologia = prompt("¿Queres aprender C# o Java?")
            if(tecnologia === "C#"|| tecnologia === "Java") {
                break
            } else {
                alert("No ingreso una tecnologia valida!")
            }
        }
        else {
            alert("No ingreso una especialidad valida!")
            especialidad = prompt("¿En que Area te gustaria especializarte, Front-End o Back-end")
    }  
}

let serFullStack = prompt(`Desea seguir estudiando 1 = ${especialidad} o convertirce en 2 = FullStack`)
if (serFullStack == "1") {
    alert(`Entonces continua perfeccionando ${tecnologia} para mejorar en el area`)
} else {
    alert("Perfecto, te deseo Exitos en tu camino a ser un FullStack Dev.!")
}

let respuesta = ""
let otraTecnologia = ""
while(true) {
    respuesta=  prompt("¿Hay alguna otra tecnología que te gustaría aprender? - ok si es asi") 
    if (respuesta=== "ok"){
        otraTecnologia = prompt("¿Cual?")
        alert(`Genial! ${otraTecnologia} es una exelente eleccion!`) 
    } else {
        break
    }
}
alert("Perfecto!, Gracias por sus respuestas!")



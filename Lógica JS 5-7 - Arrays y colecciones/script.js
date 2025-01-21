let frutas = [];
let lacteos = [];
let congelados = [];
let dulces = [];

eleccion = ""
categoria = ""
alimento = ""

while(true) {
    eleccion = prompt("Desea agregar un alimento a tu lista de compras: si - no")
    if (eleccion === "si") {
        alimento = prompt("Que alimento deseas agregar?")
        categoria = prompt("En que categoria esta este alimento? 1: frutas, 2: lacteos , 3: congelados , 4: dulces")

        switch (categoria) {
            case "1":
                frutas.push(alimento+" ")
                break;
            case "2":
                lacteos.push(alimento)
                break;
            case "3":
                congelados.push(alimento)
                break;
            case "4":
                dulces.push(alimento)
                break;
            default:
                alert("No eligio, ninguna categoria.. ")
        }
    }
    else {
        alert("Okey no desea agregar mas.")
        alert("Su lista de Compre es:.. ")
        alert("Frutas: "+frutas.join(", "))
        alert("lacteos: "+lacteos.join(", "))
        alert("congelados: "+congelados.join(", "))
        alert("dulces: "+dulces.join(", "))
        break
        
    }
}


let frutas = [];
let lacteos = [];
let congelados = [];
let dulces = [];
let indice = ""
let eleccion = "";
let categoria = "";
let alimento = "";
var mostrarLista = ``
let numElementosLista = "";


alert("buenas")

while(true) {
    eleccion = prompt(`Desea modificar su lista:\n 1: Agregar alimentos\n 2: Desea Eliminar algun alimento\n 3: No hacer cambios`);
    //Agregar elementos
    if (eleccion === "1") {
        alimento = prompt("Que alimento deseas agregar?");
        categoria = prompt("En que categoria esta este alimento? 1: frutas, 2: lacteos , 3: congelados , 4: dulces");
        switch (categoria) {
            case "1":
                frutas.push(alimento);
                break;
            case "2":
                lacteos.push(alimento);
                break;
            case "3":
                congelados.push(alimento);
                break;
            case "4":
                dulces.push(alimento);
                break;
            default:
                alert("No eligio, ninguna categoria.. ");
        }
    
    } 
    //eliminar elemento
    else if (eleccion === "2") {
        numElementosLista = frutas.length + lacteos.length + congelados.length + dulces.length
        if(numElementosLista != 0) {
            alert(`Su lista de Compre es:\n Frutas: ${frutas}\n Lacteos: ${lacteos}\n Congelados: ${congelados}\n Dulces: ${dulces}`)

            alimento= prompt("Cual alimento desea eliminar?: ")
            
            if(frutas.includes(alimento)) {
                indice = frutas.indexOf(alimento)
                frutas.splice(indice, 1)
            }
            else if (lacteos.includes(alimento)) {
                indice = lacteos.indexOf(alimento)
                lacteos.splice(indice, 1)
            }
            else if (congelados.includes(alimento)) {
                indice = congelados.indexOf(alimento)
                congelados.splice(indice, 1)
            }
            else if (dulces.includes(alimento)) {
                indice = dulces.indexOf(alimento)
                dulces.splice(indice, 1)
            }
            else {
                alert("¡No fue posible encontrar el elemento en la lista!")
            }
            alert(`Su lista de Compre es:\n Frutas: ${frutas}\n Lacteos: ${lacteos}\n Congelados: ${congelados}\n Dulces: ${dulces}`)

        } else {
            alert("Error!: Usted no posee elementos en su lista!")
        }
        
    }
    //No hacer más modificaciones
    else {
        alert("Okey,  no desea hacer modificaciones");
        alert(`Su lista de Compre es:\n Frutas: ${frutas}\n Lacteos: ${lacteos}\n Congelados: ${congelados}\n Dulces: ${dulces}`);
        break
        
    }

}

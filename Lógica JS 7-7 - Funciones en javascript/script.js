//Funciones
function suma (a, b){
    return a+b;
}
function resta (a, b){
    return a-b;
}
function multiplicacion (a, b){
    return a*b;
}
function division (a, b){
    return a/b;
}
function salir (){
    alert("Hasta la próxima")
    return false;
}

//Variables
let operacion = "";
let seguirCalculadora = true;
let num1;
let num2;

//Main
while(seguirCalculadora) {
    operacion = prompt(`¿Que operacion desea realizar?
        1 = Suma
        2 = Resta
        3 = Multiplicación
        4 = Division
        5 = Salir`);
    if (operacion != "5") {   
        num1 = Number(prompt("ingrese el primer numero"));
        num2 = Number(prompt("ingrese el segundo numero"));
        switch (operacion){
            case "1": 
                alert(`${num1}+${num2} = ${suma(num1, num2)}`);
                break;
            case "2":
                alert(`${num1}-${num2} = ${resta(num1, num2)}`);
                break;
            case "3":
                ;
                alert(`${num1}*${num2} = ${multiplicacion(num1, num2)}`);
                break;
            case "4":
                alert(`${num1}/${num2} = ${division(num1, num2)}`);
                break;
            default:
                alert("Error! no eleigio una operacion valida");
                break;
        }
    } 
    else {
        seguirCalculadora = salir();
    }
}
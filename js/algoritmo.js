let compra = prompt("vas a comprar algun termo de acero??")

if (compra == "si") {
    alert ("entonces el envio es gratis")
} else {
    alert ("habra que calcular en elvio")
}

let cant = parseInt(prompt("cuantos productos queres comprar??"))


switch (cant) {
    case 1:
    case 2:
    case 3:
        alert("Tu descuento sera de 3%");
        break;
    case 4:
    case 5:
    case 6:
        alert("Tu descuento sera de 5%");
        break;
    case 7:
    case 8:
    case 9:
    case 10:
        alert("Tu descuento sera de 8%");
        break;
    default:
        alert("Deberias preguntar por precio por mayor");
        break;
}

/*let nota = parseInt(prompt("Ingrese la nota"));

switch (nota) {
    case 0:
    case 1:
    case 2:
    case 3:
        alert("Desaprobado");
        break;
    case 4:
    case 5:
    case 6:
        alert("Aprobado");
        break;
    case 7:
    case 8:
    case 9:
    case 10:
        alert("Promocionado");
        break;
    default:
        alert("Nota incorrecta");
        break;
}
*/
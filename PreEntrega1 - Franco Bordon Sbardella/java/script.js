function nombreyapellido() {
    let nombre = prompt("Ingrese su nombre: ");
    let apellido = prompt("Ingrese su apellido: ");
    
    if (nombre !== "" && apellido !== "") {
        console.log("Bienvenido " + nombre + " " + apellido);
    } else {
        alert("Error: Ingrese su nombre y apellido para confirmar su identidad");
    }
}

nombreyapellido();

let credito = Number(prompt("Ingrese su cantidad de crédito:"));
let cantidad = Number(prompt("Ingrese la cantidad de productos: "));
let resultado = 0;

for (let indice = 1; indice <= cantidad; indice++) {
    let precio = Number(prompt("Ingrese el precio del producto " + indice + ":"))
    let objeto = {
        nombre: "Producto " + indice,
        precio: precio,
    };
    resultado += precio;
}

if (resultado <= credito) {
    console.log("Subtotal: " + resultado)
    console.log("Impuestos: 0%")
    console.log("Saldo positivo: " + (credito - resultado))
} else {
    console.log("No se puede realizar el pago")
    console.log("Saldo negativo: " + (credito - resultado))
}
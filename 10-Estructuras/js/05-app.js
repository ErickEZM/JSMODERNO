// Switch Case

const metodoPago = "tarjeta";

switch (metodoPago) {
    case "efectivo":
        pagar(metodoPago);
        break;
    case "cheque":
        pagar(metodoPago);
        break;
    case "tarjeta":
        pagar(metodoPago);
        break;
    default:
        console.log("Metodo de pago no soportado");
        break;
}

function pagar(metodoPago) {
    console.log(`Pagaste con ${metodoPago}`)
}
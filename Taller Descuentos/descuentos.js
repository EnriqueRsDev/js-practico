function precioDescuento(precio, descuento) {
    const porcentajeConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajeConDescuento) / 100;
    return(precioConDescuento);
}

precioDescuento(200, 20)

//Interactuando con el HTML
function calcPrecioDescuento() {
    const inputPrecio = document.getElementById("precio");
    const inputDescuento = document.getElementById("descuento");
    const precioValue = inputPrecio.value;
    const descuentoValue = inputDescuento.value;
    const resultado = document.getElementById("resultado");

    const precio = precioDescuento(precioValue, descuentoValue);

    if(precio < 0) {
        resultado.innerText = "Revise los valores ingresados, no se puede recibir más del 100% de descuento";
    } else if(precioValue == 0 && descuentoValue == 0) {
        resultado.innerText = "Ingrese valores para calcular";
    }else {
        resultado.innerText = `El precio con descuento es: $${precio}`;
    }
}
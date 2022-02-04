var cupones = ["Cup0n1", "D3scu3nt0", "T13nda"] //Array con cupones de descuento

function precioDescuento(precio, descuento) {
    const porcentajeConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajeConDescuento) / 100;
    return(precioConDescuento);
}



//Interactuando con el HTML
function calcPrecioDescuento() {
    const inputPrecio = document.getElementById("precio");
    const precioValue = inputPrecio.value;
    const inputDescuento = document.getElementById("descuento");
    const descuentoValue = inputDescuento.value;
    const inputCupon = document.getElementById("cupon");
    const cupon = inputCupon.value;
    const resultado = document.getElementById("resultado");

    const precio = precioDescuento(precioValue, descuentoValue);

    //validando que lo valores sean correctos
    if(descuentoValue > 100) {
        resultado.innerText = "Revise los valores ingresados";
    } else if(precioValue == 0 && descuentoValue == 0) {
        resultado.innerText = "Ingrese valores para calcular";
    } else if(descuentoValue < cupon ) { //validando si ingresaron un cupón de descuento
        calcCuponDescuento();
    } else {
        resultado.innerText = `El precio con descuento es: $${precio}`;
    }
}

//Calculando precio con cupones
function calcCuponDescuento() {
    const inputPrecio = document.getElementById("precio");
    const precioValue = inputPrecio.value;
    const inputCupon = document.getElementById("cupon");
    const cupon = inputCupon.value;
    const resultado = document.getElementById("resultado");

    let descuentoCupon;

    //Validando el cupón
    switch(cupon) {
        case cupones[0]:
            descuentoCupon = 25;
        break;

        case cupones[1]:
            descuentoCupon = 5;
        break;

        case cupones[2]:
            descuentoCupon = 15;
        break;

        default:
            resultado.innerText = `Ingrese un cupón valido`;
        break;
    }

    const precioCupon = precioDescuento(precioValue, descuentoCupon)

    resultado.innerText = `El precio con descuento es: $${precioCupon}`;
}
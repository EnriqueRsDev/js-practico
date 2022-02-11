function promedio(lista) {
    const resultado = document.getElementById("prom-resultado");
    
    const sumaLista = lista.reduce( //Reduciendo el array a un solo número
        function(valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    // console.log(sumaLista + " Suma Lista ");
    // console.log(lista.length + " Tamaño lista ");
    const promLista = sumaLista / lista.length
    // console.log(promLista + " promedio Lista ");

    resultado.innerText = `El Promedio es: ${promLista}`;
}

//Interactuando Con el html
const array = [];

function addArrayElement() {
    const promInput = document.getElementById("prom-input").value;

    if(promInput > 0) {
        let newArray = array.push(parseInt(promInput)); //Insertando los valores en el array
    } else {
        alert("Ingresa un valor");
    }
    console.log(array);
}


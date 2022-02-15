function promedio(lista) {
    const sumaLista = lista.reduce( //Reduciendo el array a un solo número
        function(valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    const promLista = sumaLista / lista.length
    return promLista;
}

//Interactuando con el html

const lista = [];

function addListElement() {
    const medInput = document.getElementById("med-input").value;

    if(medInput > 0) {
        let newArray = lista.push(parseInt(medInput)); //Insertando los valores en el array
        lista.sort(function(a, b) {
            return a - b;
        })
    } else {
        alert("Ingresa un valor");
    }
    console.log(lista);
}

//Verificando si es par o impar
function par(num) {
    if(num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function calcMediana() {
    let mediana;
    const resultado = document.getElementById("med-resultado");

    const mitadLista = parseInt(lista.length / 2); 

    /**
     * Si lista es par toma los dos elementos de en medio
     * y saca el promedio de ellos para obtener la mediana 
     * */ 
    if(par(lista.length)) {
        const elemento1 = lista[mitadLista - 1]; 
        const elemento2 = lista[mitadLista]; 

        const prom = promedio([elemento1, elemento2])
        mediana = prom;
        resultado.innerText = `La mediana es ${mediana}`

    /**
     * Si la lista es impar, toma el número de en medio 
     * y ese sería la mediana
     */
    } else {
        mediana = lista[mitadLista];
        resultado.innerText = `La mediana es ${mediana}`
    }
}


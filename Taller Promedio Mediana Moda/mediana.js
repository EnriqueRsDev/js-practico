const sumaLista = lista.reduce(
    function(valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
    }
)

const lista = [100, 200, 500, 900000000];

const mitadLista = parseInt(lista.length / 2);

function par(num) {
    if(num % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

let mediana;

if(par(lista.length)) {
    const elemento1 = lista[mitadLista];
    const elemento2 = lista[mitadLista + 1];

    const prom = sumaLista([elemento1, elemento2])
    mediana = prom;

} else {
    mediana = lista[mitadLista];
}
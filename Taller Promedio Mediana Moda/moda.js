const list1 = [];

function addElement() {
    const inputElement = document.getElementById("mod-input");
    const elementValue = inputElement.value;
    const resultado = document.getElementById("mod-resultado");
    if (elementValue >= 0 ) {
        list1.push(parseInt(elementValue));
    }else {
        resultado.innerText = "Ingrese un valor valido"
    }
    
}

const list1Count = {};

function objectList(array) {
    array.map(function(element) {
        if(list1Count[element]) {
            list1Count[element] += 1;
        } else {
            list1Count[element] = 1;
        }

        calcModa(list1Count)
    });
}

function calcModa(listArray) {
    /**
     * Cada objeto es convertido a un array
     */
                    //Convirtiendo un objeto en array
    listArray = Object.entries(list1Count).sort(
        function(a, b) {
            return a[1] - b[1]; //ordenando los arrays para que aparezca el menor como primero y el mayor como último
        }
    );

    const moda = listArray[listArray.length - 1];
    const resultado = document.getElementById("mod-resultado");
    resultado.innerText = `La moda es ${moda[0]} y se repite ${moda[1]} veces`;
}



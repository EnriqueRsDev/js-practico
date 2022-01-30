//Variables y cálculos de un cuadrado
const perimetroCuadrado = lado => (lado * 4);
// function perimetroCuadrado(lado) {
//     return(lado * 4);
// }

const areaCuadrado = lado => (lado ** 2);
// function areaCuadrado(lado) {
//     return (lado ** 2);
// }

//Variables y cálculo de un triangulo
const perimetroTriangulo = (lado1, lado2, base) => (parseInt(lado1) + parseInt(lado2) + parseInt(base));
// function perimetroTriangulo(lado1, lado2, base) {
//     return(lado1 + lado2 + base);
// }

const areaTriangulo = (base, altura) => (base * altura) / 2;
// function areaTriangulo(base, altura) {
//     return((base * altura) / 2);
// }

function alturaTriangulo(lado1, lado2, base) {
    if(lado1 === lado2 && lado1 != base && lado2 != base) {
        const altura = Math.sqrt((lado1 **2) - (base/4));
        return(altura);
    } else {
        alert("No es un triangulo Isóceles")
    }
}

//Variables y cálculo de un círculo
const diametroCirculo = radio => radio * 2;
// function diametroCirculo(radio) {
//     return(radio * 2);
// }

const perimetroCirculo = radio => diametroCirculo(radio) * Math.PI;
// function perimetroCirculo(radio) {
//     const diametro = diametroCirculo(radio);
//     return(diametro * Math.PI);
// }

const areaCirculo = radio => Math.PI * Math.pow(radio, 2);
// function areaCirculo(radio) {
//     return(Math.PI * (radio ** 2));
// }



//Interactuando con el HTMMl

//cuadrado
function calcPerimetroCuadrado() {
    const input = document.getElementById("lado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro)
}

function calcAreaCuadrado() {
    const input = document.getElementById("lado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area)
}

//circulo
function calcAreaCirculo() {
    const input = document.getElementById("radio");
    const value = input.value;

    const area = areaCirculo(value);
    alert(area)
}

function calcPerimetroCirculo() {
    const input = document.getElementById("radio");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro)
}

function calcCircunferenciaCirculo() {
    const input = document.getElementById("radio");
    const value = input.value;

    const circunferencia = diametroCirculo(value);
    alert(circunferencia);
}

//triangulo

function calcAreaTriangulo() {
    const inputBase = document.getElementById("base");
    const inputAltura = document.getElementById("altura");
    const valueBase = inputBase.value;
    const valueAltura = inputAltura.value;

    const area = areaTriangulo(valueBase, valueAltura);
    alert(area);
}

function calcPerimetroTriangulo() {
    const inputlado1 = document.getElementById("ladoT1");
    const inputlado2 = document.getElementById("ladoT2");
    const inputBase = document.getElementById("base");
    const valueLado1 = inputlado1.value;
    const valueLado2 = inputlado2.value;
    const valueBase = inputBase.value;

    const perimetro = perimetroTriangulo(valueLado1, valueLado2, valueBase);
    alert(perimetro);
}

function calcAlturaIsoceles() {
    const inputlado1 = document.getElementById("ladoT1");
    const inputlado2 = document.getElementById("ladoT2");
    const inputBase = document.getElementById("base");
    const valueLado1 = inputlado1.value;
    const valueLado2 = inputlado2.value;
    const valueBase = inputBase.value;

    const altura = alturaTriangulo(valueLado1, valueLado2, valueBase);
    alert(altura);
}
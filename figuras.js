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
const perimetroTriangulo = (lado1, lado2, base) => lado1 + lado2 + base;
// function perimetroTriangulo(lado1, lado2, base) {
//     return(lado1 + lado2 + base);
// }

const areaTriangulo = (base, altura) => (base * altura) / 2;
// function areaTriangulo(base, altura) {
//     return((base * altura) / 2);
// }

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
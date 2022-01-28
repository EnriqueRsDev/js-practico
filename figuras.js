//Variables y cálculos de un cuadrado
console.group("Cuadrados");

const ladoCuadrado = 5;
console.log(`Los lados del cuadrado miden ${ladoCuadrado} cm`);

const perimetroCuadrado = ladoCuadrado * 4;
console.log(`El perimetro del cuadrado es: ${perimetroCuadrado} cm`);

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log(`El área de un cuadrado es: ${areaCuadrado} cm^2`);

console.groupEnd();

//Variables y cálculo de un triangulo
console.group("Triángulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 3;
const baseTriangulo = 5;
console.log(`
Los lados del triangulo miden: 
${ladoTriangulo1} cm, 
${ladoTriangulo2} cm, 
${baseTriangulo} cm`
);

const alturaTriangulo = 5.5;
console.log(`La altura del triángulo es: ${alturaTriangulo}`);

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log(`El perímetro del triángulos es: ${perimetroTriangulo}`);

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log(`El área del triángulo es: ${areaTriangulo}`);

console.groupEnd();


//Variables y cálculo de un círculo

console.group("Circulos");

const radioCirculo = 5;
console.log(`El radio del círculo es: ${radioCirculo} cm`);

const diametroCirculo = radioCirculo * 2;
console.log(`El diámetro del círculo es: ${diametroCirculo} cm`);

const pi = Math.PI;
console.log(`PI: ${pi}`);

const perimetroCirculo = diametroCirculo * pi;
console.log(`El perimetro del círculo es: ${perimetroCirculo} cm`);

const areaCirculo = pi * (radioCirculo * radioCirculo);
console.log(`El área del círculo es: ${areaCirculo} cm^2`);

console.groupEnd();
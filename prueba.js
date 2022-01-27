/** VARIABLES
 * 
 * ¿Qué es una variable y para qué sirve?
 *      Una variable es un espacio en memoria, la cual puede almacenar datos, sean
 *      strings, booleanos, int, floats, etc.
 * 
 * ¿Cuál es la diferencia entre declarar e inicializar una variable?
 *      Cuando decimos declarar una variables es cuando la creamos ej. var annio;
 *      Inicializar es cuando añadimos valor a esa variables ej. annio = 2022;
 * 
 * ¿Cuál es la diferencia entre sumar números y concatenar strings?
 *      Sumar se refiere a la acción matemática ej. 2 + 2 = 4
 *      Concatenar se refiere a unir cadenas de texto "2" + "2" = 22
 * 
 * ¿Cuál operador me permite sumar o concatenar?
 *      La cruz "+"
 */

var nombre = "Enrique";
var apellido = "Reyes";
var user = "enriquers";
var edad = 21;
var email = "email@example.com"
var mayorEdad = true;
var dineroAhorrado = 200;
var deudas = 70;

console.log(nombre + apellido);
console.log(dineroAhorrado - deudas);

/** FUNCIONES
 * 
 * ¿Qué es una función?
 *      Una función es un bloque de código el cual puede recibir parametros 
 *      y es reutilizable.
 *  
 * ¿Cuándo me sirve usar una función en mi código?
 *      Cuando queremos automatizar un proceso.
 * 
 * ¿Cuál es la diferencia entre parámetros y argumentos de una función?
 *      Parametros se refiere a las variables que recibe la función.
 *      Argumento se refiere a los valores que reciben las variables que se 
 *      encuentran en los parametros.
 */

function aboutMe(nombre, apellido, user) {
    console.log(`Mi nombre es ${nombre} ${apellido}, pero prefiero que me digas ${user}`);
}

aboutMe(nombre, apellido, user);


/** CONDICIONALES
 * 
 * ¿Qué es una condicional?
 *      Es una estructura que permite validar si una condición es true o false y 
 *      dependiendo de la respuesta ejecuta una acción.
 * 
 * ¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?
 *      If else: Si una condición se cumple ejecuta un bloque de código y sino ejecuta otro bloque de código.
 *      Switch: Va comparando una condición con posibles casos y una vez cumplida la condición ejecuta una acción. 
 * 
 * ¿Puedo combinar funciones y condicionales?
 *      Si se puede, es de utilidad cuando se tiene un proceso repetitivo, entonces,
 *       al hacer uso de la función reducimos el trabajo manual.
 */

const tipoSuscripcion = "Expert";

if(tipoSuscripcion === "Basic") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if (tipoSuscripcion === "Expert") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else if (tipoSuscripcion === "ExpertPlus") {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
} else if (tipoSuscripcion === "Free"){
    console.log("Solo puedes tomar los cursos gratis");
} else {
    console.log("Adquiere una suscripción");
}

/** CICLOS
 * 
 * ¿Qué es un ciclo?
 *      Es iterar un bloque de código x veces
 * 
 * ¿Qué tipos de ciclos existen en JavaScript?
 *      For, for each, while, do while
 * 
 * ¿Qué es un ciclo infinito y por qué es un problema?
 *      Un ciclo infinito es el resultado de un mal planteo y ejecución de un loop, 
 *      el cual al no tener un punto de stop, se ejecuta infinitamente hasta que el 
 *      navegador o el usuario lo detiene forzosamente.
 * 
 * ¿Puedo mezclar ciclos y condicionales?
 *      Si, se puede y es algo muy común de utilizar juntos, ya que permite reducir trabajo 
 *      y le suma eficacia a los procesos.
 */

var i = 0;

while(i < 5 ){
    console.log(`El valor de i es: ${i}`);
    i++
}

var x = 10;

while(x >= 2) {
    console.log(`El valor de x es: ${x}`);
    --x
}


var suma = parseInt(prompt("Cuanto es 2 + 2")); 

function rSuma(valor) {
    if (valor === 4) {
        alert("Felicidades");
    } else {
        suma = parseInt(prompt("Cuanto es 2 + 2"));
    }
}

rSuma(suma);

/** LISTAS
 * 
 * ¿Qué es un array?
 *      Es una colección de datos.
 * 
 * ¿Qué es un objeto?
 *      Es una entidad que tiene propiedades, las cuales pueden ser invocadas 
 *      sin necesidad de traer todo el objeto.
 * 
 * ¿Cuándo es mejor usar objetos o arrays?
 *      Cuando la información tiene que ser almacenada con clave y valor, lo mejor es usar un objeto
 *  Y se puede usar un array cuando la información que se quiere guardar no necesita de una clave.
 * 
 * ¿Puedo mezclar arrays con objetos o incluso objetos con arrays?
 *      Si, se puede, en mi pensar tener objetos en un array puede simplificar ciertos procesos.
 */

var nombres = ["Enrique", "Mónica", "Esmeralda", "Mateo"];

function printArray(array) {
    console.log(array[0]);
}
printArray(nombres);

function allArray(array) {
    array.forEach(nombre => {
        console.log(nombre);
    });
}
allArray(nombres);

var menu = {
    platoPrincipal: "Costillitas de cerdo",
    entrada: "Nachos",
    bebida: "Coca-cola",
    postre: "Helado"
}

function printObject(objeto) {
    for (const item in objeto) {
        console.log(`${item}: ${objeto[item]}`);
    }
}
printObject(menu)
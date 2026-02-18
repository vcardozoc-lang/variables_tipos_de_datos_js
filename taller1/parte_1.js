const prompt = require('prompt-sync')();

// Parte 1- Declaración de variables
let nombre = prompt("Ingrese su nombre: ");
let edad = prompt("Ingrese su edad: ");
let pais = prompt("Ingrese su pais: ");

console.log("Nombre:", nombre);
console.log("Edad:", edad);
console.log("Pais:", pais);

// Parte 2- Tipos de datos
let numeroDecimal = prompt("Ingrese un numero decimal: ")
let mensaje = prompt("Ingrese un mensaje de texto: ")
let activo = true;
let sinValor;
let valorNulo = null;

console.log("Numero Decimal:", numeroDecimal);
console.log("Mensaje:", mensaje);
console.log("Activo:", activo);
console.log("Variable sin Valor:", sinValor);
console.log("Valor Nulo:", valorNulo);

// Parte 3 – Verificar tipos con typeof
console.log("Tipo de edad:", typeof edad);
console.log("Tipo de mensaje:", typeof mensaje);
console.log("Tipo de activo:", typeof activo);
console.log("Tipo de sinValor:", typeof sinValor);

// Parte 4 – Pequeños retos
let precio = parseInt(prompt("Ingrese el precio del producto: "));
let cantidad = parseInt(prompt("Ingrese la cantidad comprada: "));
let total = precio * cantidad;

console.log("El total a pagar es: $" + total);

// Parte 5 – Objeto básico
let persona = {
    nombre: prompt("Nombre de la persona: "),
    edad: prompt("Edad de la persona: "),
    ciudad: prompt("Ciudad de la persona: "),
};

console.log("Nombre: ", persona.nombre);
console.log("Edad: ", persona.edad);
console.log("Ciudad: ", persona.ciudad);

// Reto final
let nombreEstudiante = prompt("Nombre del estudiante: ");
let nota1 = parseInt(prompt("Ingrese Nota 1: "));
let nota2 = parseInt(prompt("Ingrese Nota 2: "));
let nota3 = parseInt(prompt("Ingrese Nota 3: "));

let promedio = (nota1 + nota2 + nota3) / 3; 

console.log("El estudiante " + nombreEstudiante + " tiene promedio " + promedio);







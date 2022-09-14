// Estructuras de Control

/*

If == Condición Simple

If/Else == Condición con Alternativa

Switch == Casos Específicos

?: "Operador Ternario"

*/


let nota = 50;

if(nota >= 65){
    console.log("Aprobado");
}else{
    console.log("Reprobado");
}

// Operador Ternario
let calificacion = nota < 65 ? "Reprobado" : "Aprobado";
console.log("Estoy ", calificacion);

// Switch
let notaSwitch = 75;

switch(notaSwitch){
    case 100:
        calificacion = "Excelente";
        break;
    case 70:
        calificacion = "Bueno";
        break;
    case 50:
        calificacion = "Puede Mejorar";
        break;
    default:
        calificacion = "Errónea";
        break;
}
console.log("Nota: ", calificacion);

/****************/

/* Bucles e Iteraciones */

/* while, for, do..while, for..in, for..of */

// Incremento Simple
for (let index = 0; index < 5; index++) {
    console.log("Index ", index);
}

// Incremento Múltiple
for (let i = 0, j=5; i < 5; i++, j--) {
    console.log("Valor de i ", i);
    console.log("Valor de j ", j);
}
// For-In

const objeto = { a: 1, b:2, c:3 };

for (const key in objeto) {
    console.log("Valor es ", objeto[key]);
}

// For-Of
let numeros = [15, 56, 78, 40];

for (let it of numeros) {
    it += 1;
    console.log(it);
}

// for..of  -- String
let palabra = "string";

for (let it of palabra) {
    console.log(it);
}

// for..of - Set

let set = new Set([1,2,3,2,4,1,1]);

for (let it of set) {
    console.log(it);
}

//const myArr = Array.from(set);

// Operadores

/**
 * Aritméticos
 *      suma, resta, multi, division, modulo, potencia
 * Asignación
 *      +=, -=, *=, /=, %=, **=, =
 * Unarios
 *      ++, --, -a
 * Comparación
 *      ==, ===, !=, !==, a < b, a > b, a <= b, a >= b 
 * Binarios
 *      | , & , ^ , 
 */


/*
snake_case
camelCase
dot.case
*/
/** 
 * Métodos para Añadir y Eliminar
 *
 * push()           Añadir elementos al final del arreglo.
 * pop()            Elimina el último elemento del arreglo.
 * unshift()        Añadir elementos al inicio del arreglo.
 * shift()          Elimina el primer elemento del arreglo.
 * concat()         unificar elementos en un arreglo
*/

/**
 * Métodos para Buscar
 * 
 * includes()               Retorna True / false
 * indexOf()                Retorna la primera posicion
 * lastIndexOf()            Retorna la ultima posicion
 * find()                   Retorna el elemento
 * findIndex()              Retorna la posicion del elemento
 */


/**
 * Métodos de Modificacion
 * 
 * slice()              Devuelve un un cantidad determinada de elementos.
 * splice()             Elimina un cantidad de elementos
 * fill()               Agregar una cantidad de elemetos en la psicion deseada.
*/

/**
 * Métodos de Ordenación
 * 
 * sort()           Ordena de manera alfabética el arreglo (A-Z).
 * reverse()        Invertir el orden del arreglo (Z-A)
 * sort(criterio)   Ordena el arreglo bajo un criterio.
*/

const nombres = ["Brenda", "Karol", "Anna", "Jason", "Ariel"];

nombres.reverse();
console.log(nombres);
nombres.sort();
nombres.reverse();
console.log(nombres);

const numeros = [1,4,6,34,7,87];

const criterio = function(a,b){
    if(a > b) return 1;
    if(a < b) return -1 
    return 0;
};
let orderedN = numeros.sort(criterio);
console.log(orderedN);

const libros = [{
    nombre: 'El caballero oscuro',
    autor: 'Frank Miller',
    leido: false
  },
  {
    nombre: 'El mundo amarillo',
    autor: 'Albert Espinosa',
    leido: false,
  },
  {
    nombre: 'Harry Potter y el caliz de fuego',
    autor: 'J.K. Rowling',
    leido: true,
  },
  {
    nombre: 'El ingenioso hidalgo Don Quijote de la Mancha',
    autor: 'Miguel de Cervantes',
    leido: false
  },
  {
    nombre: 'Berserk',
    autor: 'Kentaro Miura',
    leido: true
  },
  {
    nombre: 'Iliada',
    autor: 'Homero',
    leido: false
  }];
 
const orderByAuthor = function(a,b){
    if(a.autor.toLowerCase() > b.autor.toLowerCase()) return 1;
    if(a.autor.toLowerCase() < b.autor.toLowerCase()) return -1 
    return 0;
};

console.log(libros.sort(orderByAuthor));

libros.sort((a,b) => {
 
});

/**
 * Funciones de los Arreglos
 * 
 * forEach()
 * every()
 * map()
 * filter()
 * findLastIndex()
 * findLast()
 * 
*/

const letras = ["a", "b", "c", "d"];

const funcLetras = function(){
    console.log("Elemento");
};

//letras.forEach(funcLetras);
letras.forEach(() => console.log("Un Elemento"));

//  Parametros:  elemento, posición y un arreglo

const librosParam = [{
    nombre: 'El caballero oscuro',
    autor: ['Frank Miller', 'Homero', 'Albert Espinosa'],
    leido: false
  },
  {
    nombre: 'El caballero blanco',
    autor: ['Frank Miller', 'Albert Espinosa'],
    leido: false
  },
 ];

letras.forEach(
    (elemento) => console.log(elemento)
);

letras.forEach(
    (elemento, posicion) => console.log(elemento, posicion)
);

librosParam.forEach(
    (elemento, posicion, arreglo) => console.log(arreglo[0].autor)
);


// Every()
const letrasEvery = ["a", "b", "cg", "d"];
console.log(letrasEvery.every((e) => e.length === 1));

// Map()
const nombresT = nombres.map((nombre) => nombre.length);
console.log(nombresT);

// Filter()
const filterNombres = nombres.filter(
    (nombre) => nombre.startsWith("A")
);
console.log(filterNombres);


// Colección MAP:  Métodos ==>  get, set, has, delete, clear

const mapEmpty = new Map();
console.log(mapEmpty);
const mapUnParam = new Map([[1, "Uno"]]);
console.log(mapUnParam.size);

mapUnParam.set("2", "Dos");
console.log(mapUnParam);

mapUnParam.set("2", "Tres");
console.log(mapUnParam);

// Colección SET :::   add, has, delete, clear

const setEmpty = new Set();
const setWithoutDuplicates = new Set([1,2,3,4,5,6]);
console.log(setWithoutDuplicates);
const setWithDuplicates = new Set([1,1,1,1,2,3,2,7,5,4,5,6]);
console.log(setWithDuplicates.size);
console.log(setWithDuplicates);


let arrayNum = [2,3,4,4,6];
const setNum = new Set(arrayNum);
console.log(setNum.size);
arrayNum = Array.from(setNum);
console.log(arrayNum);

// WeakSet y WeakMap


// Operaciones de Conjuntos

/**
 * Unión            Suma conjunto A y conjunto B
 * Intersección     Elementos en común del conjunto A y B
 * Diferencia       Elementos diferentes entre conjunto A y B
 * Exclusión        Elementos que no están en el conjunto A y B
*/

const firstSet = new Set([1,2,3,4,5]);
const secondSet = new Set([3,4,5,6,7,8,9]);

const union = new Set([...firstSet, ...secondSet]);
console.log(union);

const filterIntersec = [...firstSet].filter(e => secondSet.has(e));
const setIntersec = new Set(filterIntersec);
console.log(setIntersec);

const filterDiff = [...firstSet].filter(e => !secondSet.has(e));
const setDiff = new Set(filterDiff);
console.log(setDiff);

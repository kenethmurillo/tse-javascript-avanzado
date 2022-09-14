// Tipos de Datos


/** 
 * Tipos de Primitivos: Número, texto, booleano
 *      Number 
 *      String
 *      Boolean
 * */ 

// Tipo de Complejo: Object


/**
 *  Tipo de Datos en JS
 *      Number
 *      BigInt
 *      String
 *      Boolean
 *      Object
 *      undefined
 *      function
 *      symbol
 * 
 *      var numero;
 * 
 * */ 

var numero = 'g';
console.log(typeof(numero));

// Variales y Constantes

var a;
a = 'a';

let b;
b = 'b';

var urlContactApi = 'http://...';

var funcA  = function(){}

// Método 1: Independiente
let c = 3;
let d = 4;

// Método 2: Masiva
let e = 5, f = 6;

// Método 3: Masiva
let g = 5, 
    h = 6;

//** Constantes*/

const constante = "Keneth";
const obj = { };


// Formas de Creación Funciones
  /**
   * 1. Declaración
   * 2. Expresión
   * 3. Objeto
   * */ 
  
  // Declaración
  function saludar(){
    return "Buenas Tardes";
  }

  // Expresión - RECOMENDADA
  const saludo = function saludar(){
    return "Buenos días";
  }
  console.log(saludo());

  // Objeto - NO SE RECOMIENDA
  const despedirse = new Function("return 'Adiós'");

// Tipos de Funciones

  // Función Anónima
  const saludarFuncA = function(){
    return 'Hola';
  };
  console.log(saludarFuncA());

  // Callback

  const funcB = function(){
    console.log("Funcion B");
  };

  const funcError = function(){
    console.error("Error");
  }

  const funcC = function(callback, callbackError) {
    
    let num = Math.random % 2;
    console.log(num);
    if(isNaN(num)){
        callbackError();
    }else{
        callback();
    }
    
    //callback();
  } 

  funcC(funcB, funcError);


  // Funciones Autoejecutables

  (function () {
    console.log("Funcion Autoejecutable");
  })();

  (function (txt) {
    console.log(`Funcion Autoejecutable con ${txt}`);
  })("Parametros");

  const funcAuto = (function (txt) {
    return `Const - Funcion Autoejecutable con ${txt}`;
  })("Parametros");
  console.log(funcAuto);

  // Funciones Tipo Flecha

  const funcFlecha = () => {
    return "Funcion Flecha";
  }
const funcFlechaA = () => "Funcion Flecha";


// Objetos

const objetoVacio = {};  // Objeto vacío
objetoVacio.nombre = "Mike";
objetoVacio["apellido"] = "Wolowitz";
console.log(objetoVacio);

const jugador = {
    nombre: 'Keneth',
    apellido: 'Murillo',
    edad: '32',
    hablar: function() { return "No soy un Robot!";}
};

console.log(jugador.nombre);
console.log(jugador["apellido"]);
console.log(jugador.hablar());


//  JSON  ==  JavaScript Object Notation

// Arrays

// Notación Tradicional
let letras = new Array("a", "b", "c");
let letrasT = new Array(3);
// Notación Literal
let letrasL = ["a", "b", "c"];
let letrasLVacio = [];
let letrasLMixto = ["a", 5, true];

/** 
 * Métodos para Añadir y Eliminar
 * push()           Añadir elementos al final del arreglo.
 * pop()            Elimina el último elemento del arreglo.
 * unshift()        Añadir elementos al inicio del arreglo.
 * shift()          Elimina el primer elemento del arreglo.
 * concat()         unificar elementos en un arreglo
*/

let strLetras = letrasL.join(".");
console.log(strLetras);

let splitLetras = strLetras.split(".");

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






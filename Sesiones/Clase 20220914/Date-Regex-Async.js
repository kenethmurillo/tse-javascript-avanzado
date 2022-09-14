// Objeto Fecha

// Libreria de Tercero para extender la capacidad: https://momentjs.com/

// Constructores
const fecha1 = new Date();
console.log(fecha1);

const fecha2 = new Date(737820000000);
console.log(fecha2);

const fecha3 = new Date('25 April 2010 13:00');
console.log(fecha3);

const fecha4 = new Date(1993,5, 1993, 13, 00);
console.log(fecha4);

// Métodos

Date.now();  // Devuelve el timestamp actual
console.log(Date.now());
Date.parse(); // Le da formato fecha, a una fecha en formato texto

const fechaObj = new Date();
console.log(`${fechaObj}`);
console.log(`${fechaObj.getDate()}`);
console.log(`${fechaObj.getFullYear()}`);
console.log(`${fechaObj.getTime()}`);

console.log(`${fechaObj.toDateString()}`);
console.log(`${fechaObj.toUTCString()}`);


// Objeto Error
/** 
 * Tipos de Errores
 * 
 * 1. Error
 * 2. ReferenceError
 * 3. SyntaxError
 * 4. TypeError
 * 
 * typeof :: tipo de dato: function, object, undefined, number, etc
*/

const miError = new Error('Un Mensaje de Error');
miError.message;
miError.stack;

// Manejo de Excepciones

function llamarServicioController(){
    try {
        funcError();   
    } catch (error) {
        helper.log(error);
    }
}


var funcError = function(){
    try{
        // Código suceptible a fallas
        console.info();
    }catch(ex){
        console.error();
        throw new Error();  
        // Manejamos la excepción
    }finally{
        // dispose()
        // Siempre se ejecuta
    };
}


/**
 * Modelos
 * Controladores  ---- controller.js
 * Vistas
 * Servicios .....******* servicio.js
 * Helpers
*/

// components
    // view --> plantilla (HTML)
    // controller

// services
    // controller



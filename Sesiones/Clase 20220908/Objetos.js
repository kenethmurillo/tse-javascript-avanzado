

/**
 * Jugando con Objetos
 */  


// No lo podemos hacer.
const str = "Palabra";
str = "Palabra Dos";

const obj = {
    propiedadUno: 'Propiedad Uno'
};

// Los objetos pueden mutar o modificar en tiempo de ejecución, por se guardan como referencia.
obj.propiedadDos = 'Propiedad Dos';
obj.propiedadUno = 'Propiedad Uno Modificada';

// Este tipo de mutación no se permite
const objError = {
    mensaje: 'Mensaje de Ejemplo'
};

objError = {
    mensajeAdv: 'Mensaje de Advertencia'
};

/** Getters and Setters **/

const casa = {
    ciudad: 'San José',
    distrito: 'Mata Redonda',
    get nombreCiudad(){
        return this.ciudad;
    },
    set nombreCiudad(valor){
        this.ciudad = valor;
    }
};










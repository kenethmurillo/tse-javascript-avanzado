// Factory

class Persona {
    constructor(nacionalidad) {
        this.nacionalidad = nacionalidad;
    }
}

class Usuario extends Persona {
    constructor({ nombre, apellido, edad }) {
        super(nacionalidad)
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
    }
}


// Singleton

class Singleton {
    constructor() {
        if (!Singleton.instancia) {
            Singleton.instancia = this;
        }
        return Singleton.instancia;
    }

    conectar() { }

    desconectar() { }
}

const instancia = new Singleton();

// Wrapper/Adapter

function Shipping() {
    this.request = function (street, city, zipCode) {
        // Lógica
        return "$155.00"
    }
}

/** */

function ShippingFunction() {

    this.login = function (credentials) { };

    this.storeLocation = function (location) { }; // Ubicacion de la tienda más cercana.

    this.currentLocation = function (location) { }; // Obtiene la ubicacion actual, de mi perfil

    this.calculateShipping = function (location, weigth) { };
};


function ShippingWrapper(credentials) {
    var shipping = new ShippingFunction();

    var cred = shipping.login(credentials);

    return {
        request: function (weight) {
            var user = shipping.currentLocation(cred.location);
            var store = shipping.storeLocation(user.location);
            return shipping.calculateShipping(store.location, weight);
        }
    }
}

/** Wrapper Object */

class Vehiculo { };
class Ventas { };

class VentasPorVehiculoWrapper {
    constructor() {
        var v = new Vehiculo();
        var ventas = new Ventas();
    }

    ventasMesActual(params) {

    }

    ventasProyectadas() {

    }

}


function obtenerVentasPorVehiculo() {
    const obj = new VentasPorVehiculoWrapper();

    var v1 = obj.ventasMesActual();

}



// Decorator
class Vehiculo {
    constructor(tipo) {
        this.tipo = tipo;
    }

    arranca() { }
}

class Carro extends Vehiculo {
    constructor({ tipo, marca, modelo, anio, color }) {
        super(tipo);
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.color = color || 'blanco'
    }

    detalles() {
        console.log(`${this.marca} ${this.modelo} ${this.anio} ${this.color}`);
    }
}

class Decorator extends Vehiculo {
    constructor(vehiculo) {
        super(vehiculo.tipo)
        this.vehiculo = vehiculo;
    }

    arranca() {
        this.vehiculo.arranca();
    }
}

class DecoratorCarro extends Decorator {
    constructor(carro, velocidad) {
        super(carro);
        this.velocidad = velocidad;
    }

    arranca() {
        super.arranca()
    }
}












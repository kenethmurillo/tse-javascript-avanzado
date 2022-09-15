const carrito = {
  productos: [{
    nombre: 'papel higienico',
    unidades: 4,
    precio: 5,
  },
  {
    nombre: 'chocolate',
    unidades: 2,
    precio: 1.5
  }],
  get precioTotal() {
    let precio = 0;
    for (let i = 0; i < this.productos.length; i++) {
      precio += this.productos[i].unidades * this.productos[i].precio;
    }
    return precio;
  },
  anade(producto) {
    const { nombre, unidades = 1, precio } = producto

    if (typeof nombre !== 'string') {
      throw new Error('No es un texto.');
    };

    /*if (!Number.isNaN(precio)) {
      throw new Error('No es un número.');
    }*/

    if (!Number.isInteger(unidades)) {
      throw new Error('No es un entero.');
    }

    const encontrado = this.productos.findIndex(producto =>
      producto.nombre.toLowerCase().trim() === nombre.toLowerCase().trim());

    if (encontrado) {
      // Bloque de código para sumar y cambiar el precio.
      console.log(encontrado);
    } else {
      // agregar el nuevo producto.
      this.productos.push(producto);
    }
  }
}

carrito.anade({
  nombre: "chocolate",
  unidades: 8,
  precio: 2
});

Ejercicio Programado

Nuestro carrito de la compra es bastante inteligente, pero no estaría mal que lo fuese aún más. Crear un metodo "anade" que reciba un producto y lo añada al carrito. Para ello Hay que tener en cuenta las siguientes cuestiones:

1. Si un producto ya existe en el carrito hay que aumentar la cantidad, no duplicarlo.
2. Si el precio del nuevo producto es menor, será este el que predomine.
3. La cantidad por defecto será 1, pero si hubiera más habrá que sumarlos.
4. Hay que validar los tipos de datos, el nombre del producto es un string, la cantidad es un entero y el precio es un número. En caso de que se introduzca un producto con un tipo inválido se debe lanzar una excepción.

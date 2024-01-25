/*Crea una instancia a partir de esta clase usando Object.create(). 
La clase debe tener dos métodos: uno que imprima en la consola el 
nombre de la receta y otro que imprima en la consola los ingredientes
de la receta. */


class Receta {
    constructor(nombre, ingredientes) {
        this.nombre = nombre;
        this.ingredientes = ingredientes;
    }

    // Paso por parámetros los valores, en lugar de usar this, ya que no puedo pasar por parámetros al instanciar el objeto
    mostrarNombre(nombre) {
        console.log(nombre);
    }

    mostrarIngredientes(ingredientes) {
        console.log(ingredientes);
    }
}

const receta = Object.create(Receta.prototype);
receta.mostrarNombre("Café");
receta.mostrarIngredientes("Café en Polvo, Agua Caliente");

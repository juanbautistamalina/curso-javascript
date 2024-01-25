/*Agrega un método a la clase Gadget usando el patrón de mezcla. 
Crea una instancia con 'iPhone' y 999. Llama a 'mostrarInfo' desde la instancia. */

class Gadget {
	constructor(nombre, precio) {
		this.nombre = nombre;
		this.precio = precio;
	}
}

const info = {
	mostrarInfo: function () {
		console.log(`${this.nombre} tiene un precio de $${this.precio}`);
	}
};


Object.assign(Gadget.prototype,info)
const celular = new Gadget("iPhone", 999)
celular.mostrarInfo()

/*Crea un objeto 'Persona' con una propiedad 'nombre' y un método 'saludar' que imprima 
'Hola, mi nombre es <nombre>' en la consola. */

function Persona(nombre) {
	this.nombre = nombre;
}

Persona.prototype.saludar = function(){return `Hola, mi nombre es ${this.nombre}`};

let persona_1 = new Persona("Juan");
let persona_2 = new Persona("Gastón");

console.log(persona_1.saludar());
console.log(persona_2.saludar());
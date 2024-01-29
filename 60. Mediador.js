/*Completa el código para que un mediador llamado 'VoluntariadoMediador' 
actúe como intermediario entre las diferentes organizaciones de voluntariado 
y los voluntarios. El mediador imprime en la consola la siguiente frase: 'Voluntario: 
[nombre del voluntario] - Mensaje: [mensaje]'. */


class VoluntariadoMediador {
	comunicar(nombre, mensaje) {
		console.log(`Voluntario: ${nombre} - Mensaje: ${mensaje}`);
	}
}

const mediador = new VoluntariadoMediador();

class PersonaVoluntario {
	constructor(nombre) {
		this.nombre = nombre;
	}

	enviar(mensaje) {
		mediador.comunicar(this.nombre, mensaje);
	}
}

const voluntario1 = new PersonaVoluntario("Juan")
voluntario1.enviar("Quisiera unirme a una organización de voluntariado");
// Voluntario: Juan - Mensaje: Quisiera unirme a una organización de voluntariado

const voluntario2 = new PersonaVoluntario("María")
voluntario2.enviar("Tengo experiencia en trabajos sociales");
// Voluntario: María - Mensaje: Tengo experiencia en trabajos sociales
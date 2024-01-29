/* Modifica este juego usando el patrón Singleton en JavaScript. 
El juego permite a un jugador lanzar un dado y mostrar el resultado.
La implementación del Singleton debe asegurar que solo haya una instancia
del objeto 'Juego' en todo momento (que no es el caso aquí). */

let instancia;

class Juego {
	constructor() {

        if(instancia){
            throw new Error("ERROR. Solo puedes tener una instancia");
        }
        instancia = this
    
		this.resultado = null;
	}

    getInstancia(){
        return this;
    }

	lanzarDado() {
		this.resultado = Math.floor(Math.random() * 6) + 1;
		return this.resultado;
	}
}

const juego = new Juego();
const juego2 = new Juego()

export { juego };


/*Crea una clase llamada `Rectangulo` que tenga una propiedad llamada `alto` y otra llamada `ancho`, 
y un método llamado `area` que devuelve el área del rectángulo. Luego, crea una nueva clase llamada 
`Cuadrado` que extienda de `Rectangulo` con un constructor que solo reciba un `lado`. */

class Rectangulo{
	constructor(alto, ancho) {
		this.alto = alto;
		this.ancho = ancho;
	}

	area() {
		return `El área es ${this.ancho*this.alto}`;
	}
}

class Cuadrado extends Rectangulo{
    constructor(lado){
        super(lado, lado)
        this.lado = lado;
    }
}


let rectangulo = new Rectangulo(10, 15);
console.log(rectangulo.area());

let cuadrado = new Cuadrado(5);
console.log(cuadrado.area())

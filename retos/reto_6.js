/* Refuerza tus conocimientos de POO creando un sistema de Vehículos.
    1. Crea una clase Vehículo que incluya un constructor que establezca 
    el número de ruedas y un método para mostrar detalles generales 
    del vehículo.

    2. Crea dos subclases de Vehículos cualesquiera que hereden de Vehículo
     e incluyan un constructor con atributos específicos, como la capacidad 
     de pasajeros, y un método para mostrar detalles personalizados.

    3. Crea una instancia de cada Vehículo y muestra sus detalles en la consola.*/

class Vehiculo{
    constructor(numero_ruedas){
        this.numero_ruedas = numero_ruedas;
    }

    info(){
        return `Este vehículo tiene ${this.numero_ruedas}`
    }
}

class Auto extends Vehiculo{
    constructor(numero_ruedas, capacidad_pasajeros, color){
        super(numero_ruedas)
        this.capacidad_pasajeros = capacidad_pasajeros;
        this.color = color;
    }

    info(){
        return `Este auto tiene ${this.numero_ruedas} ruedas. Es de color ${this.color} y puede transportar ${this.capacidad_pasajeros} pasajeros`
    }
}


class Bicicleta extends Vehiculo{
    constructor(numero_ruedas, capacidad_pasajeros, tipo){
        super(numero_ruedas);
        this.capacidad_pasajeros = capacidad_pasajeros;
        this.tipo = tipo;
    }

    info(){
        return `Esta bicicleta tiene ${this.numero_ruedas} ruedas. Es una bicicleta tipo ${this.tipo}`
    }
}


const auto = new Auto(4, 4, "rojo");
const bici = new Bicicleta(2, 1, "Montaña");

console.log(auto.info());
console.log(bici.info());

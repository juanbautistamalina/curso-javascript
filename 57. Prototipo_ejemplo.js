class Alexa{
    constructor(version){
        this.version=version;
    }

    saludar(){
        console.log("Hola, soy Alexa")
    }

}

const alexa1 = new Alexa("1")
const alexa2 = new Alexa("2")
const alexa3 = new Alexa("3")

Alexa.prototype.saludar()
alexa1.__proto__.saludar()
alexa1.saludar()
alexa2.saludar()
alexa3.saludar()
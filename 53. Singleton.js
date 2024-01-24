let contar = 0;
let instancia;

// Forma 1
class Contador{
    constructor(){
        if(instancia == true){
            throw new Error("ERROR. Solo puedes tener una instancia");
        }
        instancia = this
    }

    getInstancia(){
        return this;
    }

    getContar(){
        return contar;
    }

    incrementar(){
        return ++contar;
    }
}


// Forma 2 (más usada)
const contador = {
    getInstancia(){
        return this;
    },

    getContar(){
        return contar;
    },

    incrementar(){
        return ++contar;
    }
}

Object.freeze(contador)
export {contador}

// export default Object.freeze(new Contador())
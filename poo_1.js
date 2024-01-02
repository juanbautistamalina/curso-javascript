// clase
class animal{
    // metodo constructor
    constructor(especie, edad, color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `Soy un ${especie}, tengo ${edad} años y soy de color ${color}`;
    }

    // metodo
    ver_info(){
        console.log(this.info);
    }



}


// Cuando se trabaja con objetos, es recomendable usar const
const perro = new animal("perro", 5, "marron"); // instancias
const gato = new animal("gato", 2, "negro")
const pajaro = new animal("pajaro", 1, "gris");

// console.log(perro.info);
// console.log(gato.info);
// console.log(pajaro.info);

// haciendo uso de los métodos
perro.ver_info();
gato.ver_info();
pajaro.ver_info();
console.log("1. Reto: Variables");
const pi = 3.1416;
let radio = 50;
console.log("PI: "+pi);
console.log("Radio: "+radio);

console.log("------------------------------");

console.log("2. Reto: Texto");
const nombre = "tu_nombre";
console.log(nombre);

console.log("------------------------------");

console.log("3. Reto: Métodos de Texto");
let palabra = "filipinas";
palabra = palabra.toUpperCase();
console.log(palabra);

console.log("------------------------------");

console.log("4. Reto: Numero");
let numero = 5;
console.log("Número: "+numero);

console.log("------------------------------");

console.log("5. Reto: Lista");
let frutas = ['manzana', 'naranja', 'pera', "salak"];
console.log(frutas);

console.log("------------------------------");

console.log("6. Reto: Metodos de Lista");
let lista = ["principio", "medio"];
lista.push("final");
console.log(lista);

console.log("------------------------------");

console.log("7. Reto: Objeto");
let persona = {
    nombre: "Juan Bautista",
    edad: 21
}
console.log(persona);

console.log("------------------------------");

console.log("8. Reto: Tipos");
let mi_variable = 5;
console.log(typeof(mi_variable));

console.log("------------------------------");

console.log("9. Reto: Plantillas de texto y Coerción");
let mi_nombre = 'Juan';
const saludo = `Hola ${mi_nombre}`;
console.log(saludo);

console.log("------------------------------");

console.log("10. Reto: Variables y tipos de datos");
let frase = "¡Hola Mundo!";
let p_nombre = "Juan";
console.log(frase + " Soy "+p_nombre);
console.log("Mi nombre en minúsculas es: " + p_nombre.toLowerCase());
console.log("Mi nombre en mayúsculas es: "+ p_nombre.toUpperCase());
console.log("El mensaje de '¡Hola Mundo!' tiene "+frase.length+" caracteres")

console.log("------------------------------");

console.log("11. Reto: Operadores Comparativos de Números");
let objeto = {
    numero1: 20, 
    numero2: 10
};

console.log(objeto.numero1 >= objeto.numero2);

console.log("------------------------------");

console.log("12. Reto: Operadores Comparativos de Texto");
let str1 = "Cadena Uno";
let str2 = "Cadena Dos";
console.log(str1 == str2);

console.log("------------------------------");

console.log("13. Reto: Comparar por valor vs por referencia");
const a_ = [1, 2, 3];
const b_ = [1, 2, 3];
console.log(a_ === b_); // false

console.log("------------------------------");

console.log("14. Reto: OP. Aritméticos");
let a = 10;
let b = 5;
let c = 3;
console.log(a+b);
console.log(a*b);
console.log(a-b);
console.log(c*c);
console.log(125 / b);

console.log("------------------------------");

console.log("15. Reto: OP. Logicos")
let respuesta = 5>2 && 3<7;
console.log(respuesta);

console.log("------------------------------");

console.log("16. Reto: Operadores");
let numero1= 10
let numero2 = 5;
str1 = "hola";
str2 = "adios";
let objeto1 = {nombre: "Juan"};
let objeto2 = {edad: 21};

console.log("¿El número 1 es mayor que el número 2?: "+(numero1>numero2));
console.log("¿El número 1 es menor que el número 2?: "+(numero1<numero2));
console.log("¿El número 1 es igual que el número 2?: "+(numero1==numero2));
console.log("¿El texto 1 es igual al texto 2?: "+(str1 == str2));
console.log("¿Los objetos son iguales?: "+(objeto1 === objeto2))
console.log("AND Lógico: "+(false && false));
console.log("OR Lógico: "+(true || false));
console.log("La suma de 10 + 3: "+(10+3));
console.log("La resta de 10 - 3: "+(10-3));
console.log("La multiplicación de 10 * 3: "+(10*3));
console.log("La división de 10 / 3: "+(10/3));
console.log("10 módulo de 3: "+(10%3));

console.log("------------------------------");

console.log("17. Reto: Condicional if/else");
let boton = "next";

if(boton == "next"){
    console.log("The Weeknd");
}else if (boton == "previous"){
    console.log("Eminem");
}

console.log("------------------------------");

console.log("18. Reto: Condicional Switch");
numero = 1; 
let color = '';

switch(numero){
    case 1:
        color = "rojo";
        break;
    
    case 2:
        color = "azúl";
        break;

    case 3:
        color = "verde";
        break;

    default:
        color = "negro";
}

console.log(color);

console.log("------------------------------");

console.log("19. Reto: OP Ternario");
numero = 1;
let resultado = numero >= 0 ? "Es positivo" : "Es negativo";
console.log(resultado)

console.log("------------------------------");

console.log("20. Reto: Condicionales");
let edad = 18;
let accion = "crear";
numero = 10


 if(edad >= 18){
    console.log("Eres mayor de edad");
 }else{
    console.log("Eres menor de edad");
 }

 switch(accion){
    case "crear":
        console.log("La acción es crear");
        break;

    case "colocar":
        console.log("La acción es colocar");
        break;

    case "actualizar":
        console.log("La acción es actualizar");
        break;

    case "borrar":
        console.log("La acción es borrar");
        break;   
 }

 if(numero % 2 == 0){
    console.log("El número es par");
 }else{
    console.log("El número es impar");
 }

 console.log("------------------------------");

console.log("21. Reto: Bucle for");
for(let i = 0; i<30; i++){
    console.log("<section></section>");
}

console.log("------------------------------");

console.log("22. Reto: Bucle for of");
const lista1 = ['manzana', 'naranja', 'uva'];
for(let i of lista1){
    console.log(i);
}

console.log("------------------------------");

console.log("23. Reto: Bucle for in");
const persona1 = {nombre: 'Juan', edad: 25, ciudad: 'Madrid'};
for(let i in persona1){
    console.log(i +": "+persona1[i]);
}

console.log("------------------------------");

console.log("24. Reto: Bucle While");
let i = 1;
while(i<=5){
    console.log(i);
    i++;
}

console.log("------------------------------");

console.log("25. Reto: Bucle Do While");
i = 1
do{
    console.log(i);
    i++;
}while(i<=10)

console.log("------------------------------");

console.log("26. Reto Bucles: ");
i = 1;
while(i<=5){
    console.log(i);
    i++;
};

console.log("---------");

let colores = ["rojo", "verde", "azul", "amarillo"];
for(let color of colores){
    console.log(color);
};

console.log("---------");

let ob_persona = {
    nombre: "Juan",
    edad: 21,
    profesion: "Programador"
};
console.log(ob_persona);
console.log("---------");

for(let persona in ob_persona){
    console.log(persona + ": "+ob_persona[persona]);
}

console.log("---------");

for(let i = 2; i<=10; i+=2){
    console.log(i)
}

console.log("------------------------------");


// Reto Funciones
function postear(texto){
    function validar(texto){}
    function guardar(texto){}
    function enviar(texto){}
}



console.log("27. Reto: Declaración vs Expresión");
function multiplicar_num(a,b){} // Declaración
let multiplica = function(a,b){ // Expresión
    let resultado = a * b;
    console.log(resultado);
}
multiplica(5,5);

console.log("------------------------------");

console.log("28. Reto: Retorno");
function retorno() {
    return 27;
}

console.log(retorno())

console.log("------------------------------");

console.log("29. Reto: Métodos");
let ciudades = ['Busan', 'Hakone', 'Yogjakarta'];
ciudades.unshift('Moulboul');
console.log(ciudades);

console.log("------------------------------");


console.log("30. Reto: Ámbito");
let multiplicador = 2;

function multiplicar(num) {
    resultado = num * multiplicador;
    return resultado;
}

console.log(multiplicar(6));

console.log("------------------------------");

console.log("31. Reto: Ámbito: var vs let");
var x = 5;
var y;
{
    x = 10;
	let y = 5;
}
console.log(x,y); // 10 undefined


console.log("------------------------------");

console.log("32. Reto: Callback");
function suma(a, b, callback) {
	let resultado = a+b;
    callback(resultado);
}

suma(10,10,console.log);

console.log("------------------------------");

console.log("33. Reto: Funciones Flecha");
const sumar = (a,b) => {console.log(a+b)};
sumar(2,2);

console.log("------------------------------");

console.log("34. Reto: Funciones");
 var validacion = false;

const validar_formulario = (nombre, email, mensaje) => {
    if(nombre && email && mensaje){
        validacion = true;
    }else{
        validacion = false;
    }

    enviar_formulario()
}

function enviar_formulario(){
    if(validacion == true){
        console.log("¡Formulario enviado con éxito!");
    }else{
        console.log("Por favor completa todos los campos.");
    }
}


mi_nombre = "Juan";
let email = "malinajuanbautista@gmail.com";
let mensaje = "Hola";

validar_formulario(mi_nombre, email, mensaje);

console.log("------------------------------");

console.log("35. Reto: Contexto");
const item = { 
    id: '1234556', 
    getId: function() { console.log(this.id); } };

item.getId();

console.log("------------------------------");

console.log("36. Reto: POO");
const javascript = {
    nombre:"JavaScript",
    año: 1995,
    autor: "Brendan Eich",
    info: function obtener_info(){return `${this.nombre} fue creado en ${this.año} por ${this.autor}`}
};

let info = javascript.info();
console.log(info);

console.log("------------------------------");

console.log("37. Reto: Nuevo");
function Perro(nombre) {
    this.nombre = nombre
}

let perro = new Perro("Firulais");
console.log(perro.nombre);

console.log("------------------------------");

console.log("38. Reto: Prototype");
function Persona(nombre) {
	this.nombre = nombre;
}

Persona.prototype.saludar = function(){return `Hola, mi nombre es ${this.nombre}`};
let persona_1 = new Persona("Juan");
let persona_2 = new Persona("Gastón");
console.log(persona_1.saludar());
console.log(persona_2.saludar());

console.log("------------------------------");

console.log("39. Reto: Clase");
class Canal{
    constructor(canal, tipo, espectadores, url){
        this.canal = canal;
        this.tipo = tipo;
        this.espectadores = espectadores;
        this.url = url;
    }

    ir(){
        console.log(this.url);
    }

}


const canal = new Canal("chessbrah", "Chess", 320.000, "https://www.twitch.tv/chessbrah");
console.log(canal)
canal.ir();

console.log("------------------------------");


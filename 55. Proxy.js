const jugador = {
    nombre: 'Juan',
    nivel: 5,
    puntaje: 100
};

const controlJuego = new Proxy(jugador, {
    get: (objeto, propiedad) => {
        if (propiedad === 'nivel') {
            console.log(`Nivel obtenido: ${objeto.nivel}`);
        }
        return objeto[propiedad];
    },
    set: (objeto, propiedad, valor) => {
        if (propiedad === 'puntaje') {
            console.log(`Nuevo puntaje: ${valor}`);
        }
        objeto[propiedad] = valor;
        return true;  // Indica que la asignación fue exitosa
    }
});

// Ejemplos de uso:
console.log(controlJuego.nombre);  
console.log(controlJuego.nivel);  
console.log(controlJuego.puntaje); 
controlJuego.puntaje = 150; 

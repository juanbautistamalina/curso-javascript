/* Crea un constructor llamado 'ObraDeArte' que acepte dos parámetros: 'titulo' y 'autor'. 
   Dentro del constructor, asigna estos parámetros a las propiedades correspondientes del objeto creado. 
   Luego, agrega un método llamado 'mostrarDetalles' que devuelva un mensaje con el título y el autor 
   de la obra de arte. */

   function ObraDeArte(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
        
        this.toString = function mostrarDetalles() {
            return this.titulo + ' fue creado por ' + this.autor;
	}
  }


  const obra_arte = new ObraDeArte("Mona Lisa", "Leonardo Da Vinci");
 console.log(obra_arte.toString())

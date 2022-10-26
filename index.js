class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    getFullName() {
        return `${this.nombre} ${this.apellido}`;
    }

    addMascota(nombreMascota) {
        this.mascotas.push(nombreMascota);
    }

    countMascotas() {
        return this.mascotas.length;
    }

    addBook(nombre, autor) {
        this.libros.push({ nombre: nombre, autor: autor });
    }

    getBookNames() {
        let nombresLibros = this.libros.map(({nombre, autor}) => {
            return nombre;
        })
        console.log(nombresLibros);
    }
}

let usuario = new Usuario("Guillermo", "Marianacci", [{ nombre: "It", autor: "Stephen King" }, { nombre: "Cell", autor: "Stephen King" }], ["Otto", "Lara"]);

console.log(usuario.getFullName());
usuario.addMascota("Suki");
console.log(usuario.countMascotas());
usuario.addBook("Carrie", "Stephen King");
usuario.getBookNames();
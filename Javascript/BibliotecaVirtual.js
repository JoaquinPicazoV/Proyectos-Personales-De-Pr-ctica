/* Este programa consiste en una breve simulación de una biblioteca virtual. Se tiene un inventario, el cual se puede añadir, eliminar,
buscar y ver todo el inventario.*/

// Creo un arreglo para guardar todos los libros
let books = [];

// Clase libro
class book {

    // Constructor de book
    constructor(title, year, description) {
        this.title = title;
        this.year = year;
        this.description = description;
    }

    // Muestra la información del libro
    viewInfo() {
        console.log('Title: ' + this.title);
        console.log('Year: ' + this.year);
        console.log('Description: ' + this.description);
    }
}

// Añade el libro al arreglo
function addBook(book) {
    books.push(book);
}

// Busca y elimina el libro del arreglo
function deleteBook(title) {
    let size = books.length;
    let i;
    for (i = 0; i < size; i++) {
        if (books[i] && books[i].title == title) {
            console.log('Libro "' + books[i].title + '" encontrado y eliminado');
            books.splice(i, 1);
            break;
        }
    }
    if (i == size) {
        console.log('Libro no encontrado');
    }
}

// Busca un libro usando su título, y luego muestra la información del libro encontrado
function search(title) {
    let size = books.length;
    let i;
    for (i = 0; i < size; i++) {
        if (books[i] && books[i].title == title) {
            books[i].viewInfo();
            break;
        }
    }
    if (i == size) {
        console.log('Libro no encontrado');
    }
}

// Muestra todos los libros almacenados
function viewBooks() {
    console.log('Inventario: ');
    let size = books.length;
    let i = 0;
    for (i = 0; i < size; i++) {
        console.log('Libro ' + (i + 1) + ': ' + books[i].title);
    }
    if (size == 0) {
        console.log('Inventario vacio');
    }
}

// Creo los libros usando la clase book
let book1 = new book('Calculo 1', 2000, 'Aprende calculo 1 realizando los ejercicios de este libro...');
let book2 = new book('Fisica mecanica', 2004, 'Fundamento de fisica mecanica. ¡Aprende las leyes de newton con nosotros!...');
let book3 = new book('Introduccion a la programacion', 2014, 'Se enseña la logica de programacion y una introduccion a Python...');
let book4 = new book('Historia de America', 1997, 'Se narran los acontecimientos que sucedieron en America...')

// ################################# PONIENDO A PRUEBA #########################################
// Añado los libros al inventario de libros "books"
addBook(book1);
addBook(book2);
addBook(book3);
addBook(book4);

// Elimino un libro del inventario usando su título
console.log('');
deleteBook('Calculo 1');

// Busco un libro específico dentro del inventario usando el título
console.log('');
search('Introduccion a la programacion');

// Se muestran todos los libros del inventario
console.log('');
viewBooks();

/* 
Elementos que mejorar a futuro:
- Poder filtrar mediante la descripción, buscando coincidencias.
- Añadir un sistema de préstamo de libros.
- etc...
*/
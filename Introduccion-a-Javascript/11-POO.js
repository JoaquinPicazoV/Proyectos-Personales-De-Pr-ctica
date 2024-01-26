/* ######################################### PROGRAMACIÓN ORIENTADA A OBJETOS #######################################
Es un paradigma de programación el cual se basa en clases, objetos, métodos, propiedades, etc...
Se acerca más a la realidad.

############################################ ¿CÓMO CREAR CLASES Y OBJETOS? ###########################################
Por ejemplo, ¿qué PROPIEDADES o características tiene una persona?. Tiene nombre, edad, nacionalidad, rut, etc...
Por lo tanto, en Javascript podemos crear una clase persona y su CONSTRUCTOR lo cual sería el "molde" para crear
una persona. 
Luego, ¿qué acción/es puede realizar una persona?. Puede saludar, despedirse, etc... Por lo tanto, podemos crear
MÉTODOS, lo que a las acciones que va a realizar nuestra persona.
*/

class persona{  // Clase persona

    // Constructor con sus atributos
    constructor(nombre, edad, nacionalidad, rut){
        this.nombre = nombre;
        this.edad = edad;
        this.nacionalidad = nacionalidad;
        this.rut = rut;
    }

    saludar(){ // Método para saludar
        console.log("¡Hola!");
    }

    despedirse(){ // Método para despedirse
        console.log("¡Adios!");
    }
}

/*
Ahora que ya tenemos nuestra clase persona con su constructor y propiedades, podemos crear objetos a partir del "molde"
que hicimos anteriormente. 
*/

let persona1 = new persona('Sebastian Molina',32,'Chilena','19222222-2'); 

/*
Como se puede ver, se crea una variable con el nombre "persona1" la cual corresponde a una nueva persona que se crea usando
el constructor de nuestra clase "persona". Para finalizar, se le otorgan los valores que queremos en el mismo orden en el cual
está en nuestro constructor (nombre, edad, nacionalidad, rut).
Ahora que ya tenemos creada nuestra persona1, podemos hacer que esta realice las acciones de saludar y despedirse (métodos).
*/

persona1.saludar(); // Saludará por consola
persona1.despedirse(); // Se despedirá por consola

/*También, podemos ver datos específicos de la persona que acabamos de crear, usando el nombre del objeto (persona1) y la propiedad a la
cual deseamos acceder. Por ejemplo para acceder al nombre: 
*/
console.log(persona1.nombre); // Muestra en consola el nombre

/* O si deseamos acceder a su rut: */
console.log(persona1.rut); // Muestra en consola su rut

/*
Ya aprendiste los conceptos básicos de clase y objeto, utilizando propiedades y métodos. Se pueden realizar acciones más "complejas"
dependiendo de la finalidad del código. Te recomiendo experimentar y añadir tus propias ideas para practicar.
NOTA: Recordar los pilares de POO.
*/
/* Este programa consiste en una breve simulación de una red social. Se genera una clase y a partir de esta los objetos. Luego estos
objetos pueden interactuar entre si, por ejemplo, añadirse a amigos, hacer publicaciones (texto), ver publicaciones de otro usuario, etc... */

// Creo la clase User
class User {

    // Constructor del usuario 
    constructor(username, age, phoneNumber) {
        this.username = username;
        this.age = age;
        this.phoneNumber = phoneNumber;
        this.friends = [];
        this.publication = [];
    }

    // Ver mi propio perfil
    viewMyProfile() {
        console.log('Username: ' + this.username);
        console.log('Age: ' + this.age);
        console.log('Phone Number: ' + this.phoneNumber);
    }

    // Añadir amigo (se añaden mutuamente)
    addFriend(newFriend) {
        this.friends.push(newFriend);
        newFriend.friends.push(this);
    }

    // Ver publicaciones un usuario
    viewPublications(friend) {
        let size = friend.publication.length;
        let i = 0;
        for (i = 0; i < size; i++) {
            console.log('Publication ' + (i + 1) + ': ' + friend.publication[i]);
        }

    }

    // Realizar publicación
    sendPublication(message) {
        this.publication.push(message);
    }

    // Ver los amigos agregados
    viewFriends() {
        let size = this.friends.length;
        let i = 0;
        for (i = 0; i < size; i++) {
            console.log(this.friends[i].username);
        }
    }
}


// Se crean los objetos (usuarios) a partir la clase User.
let user1 = new User('John Doe', 32, '34722367');
let user2 = new User('Maria Soto', 24, '57664857');
let user3 = new User('Miguel Reyes', 42, '99874765');

// Los usuarios creados realizan publicaciones.
user1.sendPublication('Hoy hice un "hola mundo" en Javascript');
user1.sendPublication('Busco jugadores que jueguen League Of Leyends. ¡Agrégame a amigos!');
user1.sendPublication('Perdón, aún no entiendo como usar bien esta red social');

user2.sendPublication('No encuentro mi maquillaje favorito. ¿Alguien sabe datos de tiendas de maquillaje que estén en el centro de Puerto Montt?');

user3.sendPublication('¡Hoy en nuestro partido de fútbol ganamos 3-1!');
user3.sendPublication('¡Buenas noches!');


// Creo un usuario aparte el cual va a interactuar en la red social
let finalUser = new User('Robin Perez', 22, 5846689);

console.log(' ');
console.log('Al ver su propio perfil: ');
finalUser.viewMyProfile(); // Muestra su información de usuario

finalUser.addFriend(user1); // Agrega a amigos al user1 (John Doe)

finalUser.sendPublication('Hoy me registré en mi simulación de red social. ¡Agréguenme a amigos!'); // Hace una publicación en su perfil

console.log(' ');
console.log('Al ver su lista de amigos: ');
finalUser.viewFriends(); // Muestra a todos los amigos agregados (en este caso solo agregó a John Doe)

// Suponiendo que visita el perfil del user2 y ve sus publicaciones...
console.log(' ');
console.log('El usuario actual visita el perfil de Maria Soto y ve sus publicaciones... Como resultado ve:')
finalUser.viewPublications(user2);

/*
Elementos que mejorar a futuro:
- Se puede añadir una interacción con el usuario para dar a elegir opciones.
*/
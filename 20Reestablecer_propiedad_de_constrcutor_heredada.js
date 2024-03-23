/*
Restablecer una propiedad de constructor heredada
Cuando un objeto hereda el prototypede otro objeto, también hereda la propiedad constructora del supertipo.

He aquí un ejemplo:

function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
let duck = new Bird();
duck.constructor
Pero ducky todos los casos de Birddeberían mostrar que fueron construidos por Birdy no Animal. Para hacerlo, puede configurar manualmente la propiedad del constructor Birddel Birdobjeto:

Bird.prototype.constructor = Bird;
duck.constructor
Corrija el código duck.constructory beagle.constructordevuelva sus respectivos constructores.
*/

function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Only change code below this line
Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;


let duck = new Bird();
let beagle = new Dog();


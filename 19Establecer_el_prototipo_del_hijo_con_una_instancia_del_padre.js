/*
Establecer el prototipo del niño como una instancia del padre
En el desafío anterior viste el primer paso para heredar el comportamiento del supertipo (o padre) Animal: crear una nueva instancia de Animal.

Este desafío cubre el siguiente paso: configurar el prototypesubtipo (o hijo), en este caso, Birdpara que sea una instancia de Animal.

Bird.prototype = Object.create(Animal.prototype);
Recuerda que prototypees como la "receta" para crear un objeto. En cierto modo, la receta por Birdahora incluye todos los "ingredientes" clave de Animal.

let duck = new Bird("Donald");
duck.eat();
duckhereda todas las Animalpropiedades de , incluido el eatmétodo.

Modifique el código para que las instancias de Doghereden de Animal.


*/

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() {}

// Only change code below this line
Dog.prototype = Object.create(Animal.prototype);

let beagle = new Dog("Lulu");

beagle.eat(); 


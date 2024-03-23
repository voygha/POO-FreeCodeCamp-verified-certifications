/*
Heredar comportamientos de un supertipo
En el desafío anterior, creaste una supertypellamada Animalque definía comportamientos compartidos por todos los animales:

function Animal() { }
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};
Este y el próximo desafío cubrirán cómo reutilizar los métodos del Animalinterior Birdy Dogsin definirlos nuevamente. Utiliza una técnica llamada herencia. Este desafío cubre el primer paso: crear una instancia de supertype(o padre). Ya conoce una forma de crear una instancia de Animaluso del newoperador:

let animal = new Animal();
Existen algunas desventajas al utilizar esta sintaxis para la herencia, que son demasiado complejas para el alcance de este desafío. En cambio, aquí hay un enfoque alternativo sin esas desventajas:

let animal = Object.create(Animal.prototype);
Object.create(obj)crea un nuevo objeto y lo establece objcomo el del nuevo objeto prototype. Recuerde que prototypees como la "receta" para crear un objeto. Al configurar prototypeof animalcomo prototypeof Animal, efectivamente le estás dando a la animalinstancia la misma "receta" que cualquier otra instancia de Animal.

animal.eat();
animal instanceof Animal;
El instanceofmétodo aquí devolvería true.

Úselo Object.createpara crear dos instancias de Animalnombrado ducky beagle.
*/

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

// Only change code below this line

let duck = Object.create(Animal.prototype); // Change this line
let beagle = Object.create(Animal.prototype); // Change this line


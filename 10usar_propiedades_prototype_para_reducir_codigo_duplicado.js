/*
Utilice propiedades de prototipo para reducir el código duplicado
Dado que numLegsprobablemente tendrá el mismo valor para todas las instancias de Bird, esencialmente tiene una variable duplicada numLegsdentro de cada Birdinstancia.

Puede que esto no sea un problema cuando solo hay dos instancias, pero imagínese si hay millones de instancias. Serían muchas variables duplicadas.

Una mejor manera es utilizar el prototypede Bird. Las propiedades de prototypese comparten entre TODAS las instancias de Bird. Aquí se explica cómo agregar numLegsa Bird prototype:

Bird.prototype.numLegs = 2;
Ahora todas las instancias de Birdtienen la numLegspropiedad.

console.log(duck.numLegs);
console.log(canary.numLegs);
Dado que todas las instancias tienen automáticamente las propiedades en prototype, piense en a prototypecomo una "receta" para crear objetos. Tenga en cuenta que prototypefor ducky canaryes parte del Birdconstructor como Bird.prototype.

Agregar una numLegspropiedad al prototypedeDog
*/


function Dog(name) {
    this.name = name;
  }
  
  
  Dog.prototype.numLegs =4;
  // Only change code above this line
  let beagle = new Dog("Snoopy");
  
  console.log(beagle.numLegs);
  
  
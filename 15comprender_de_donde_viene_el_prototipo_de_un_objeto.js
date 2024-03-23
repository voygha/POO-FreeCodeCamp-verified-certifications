/*
Comprender de dónde viene el prototipo de un objeto
Así como las personas heredan genes de sus padres, un objeto los hereda prototypedirectamente de la función constructora que lo creó. Por ejemplo, aquí el Birdconstructor crea el duckobjeto:

function Bird(name) {
  this.name = name;
}

let duck = new Bird("Donald");
duckhereda su prototypede la Birdfunción constructora. Puedes mostrar esta relación con el isPrototypeOfmétodo:

Bird.prototype.isPrototypeOf(duck);
Esto volvería true.

Úselo isPrototypeOfpara verificar el prototypede beagle.
*/

function Dog(name) {
    this.name = name;
  }
  
  let beagle = new Dog("Snoopy");
  
  // Only change code below this line
  
  console.log(Dog.prototype.isPrototypeOf(beagle));
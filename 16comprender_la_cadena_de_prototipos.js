/*
Comprender la cadena de prototipos
Todos los objetos en JavaScript (con algunas excepciones) tienen una extensión prototype. Además, un objeto prototypeen sí mismo es un objeto.

function Bird(name) {
  this.name = name;
}

typeof Bird.prototype;
Debido a que a prototypees un objeto, ¡a prototypepuede tener el suyo propio prototype! En este caso, el prototypede Bird.prototypees Object.prototype:

Object.prototype.isPrototypeOf(Bird.prototype);
¿Cómo es esto útil? Quizás recuerdes el hasOwnPropertymétodo de un desafío anterior:

let duck = new Bird("Donald");
duck.hasOwnProperty("name");
El hasOwnPropertymétodo está definido en Object.prototype, al que se puede acceder mediante Bird.prototype, al que luego se puede acceder mediante duck. Este es un ejemplo de la prototypecadena. En esta prototypecadena, Birdes supertypefor duck, mientras que duckes subtype. Objectes un supertypepara ambos Birdy duck. Objectes supertypepara todos los objetos en JavaScript. Por tanto, cualquier objeto puede utilizar el hasOwnPropertymétodo.

Modifique el código para mostrar la cadena de prototipo correcta.
*/

function Dog(name) {
    this.name = name;
  }
  
  let beagle = new Dog("Snoopy");
  
  console.log(Dog.prototype.isPrototypeOf(beagle));  // yields true
  
  // Fix the code below so that it evaluates to true
  console.log(Object.prototype.isPrototypeOf(Dog.prototype));
  
  
  console.log(beagle.hasOwnProperty("name"));
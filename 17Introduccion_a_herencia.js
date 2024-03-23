/*
Utilice la herencia para no repetirse
Hay un principio en programación llamado No te repitas (DRY) . La razón por la que el código repetido es un problema es porque cualquier cambio requiere corregir el código en varios lugares. Esto suele significar más trabajo para los programadores y más margen de error.

Observe en el siguiente ejemplo que el describemétodo es compartido por Birdy Dog:

Bird.prototype = {
  constructor: Bird,
  describe: function() {
    console.log("My name is " + this.name);
  }
};

Dog.prototype = {
  constructor: Dog,
  describe: function() {
    console.log("My name is " + this.name);
  }
};
El describemétodo se repite en dos lugares. El código se puede editar para seguir el principio DRY creando un supertype(o padre) llamado Animal:

function Animal() { };

Animal.prototype = {
  constructor: Animal, 
  describe: function() {
    console.log("My name is " + this.name);
  }
};
Como Animalincluye el describemétodo, puedes eliminarlo de Birdy Dog:

Bird.prototype = {
  constructor: Bird
};

Dog.prototype = {
  constructor: Dog
};
El eatmétodo se repite tanto en Catcomo en Bear. Edite el código con el espíritu de DRY moviendo el eatmétodo al archivo Animal supertype.
*/

function Cat(name) {
    this.name = name;
  }
  
  Cat.prototype = {
    constructor: Cat,
  };
  
  function Bear(name) {
    this.name = name;
  }
  
  Bear.prototype = {
    constructor: Bear,
  };
  
  function Animal() { }
  
  Animal.prototype = {
    constructor: Animal,
    eat: function() {
      console.log("nom nom nom");
    }
  };
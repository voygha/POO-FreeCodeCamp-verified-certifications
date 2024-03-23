/*
Recuerde establecer la propiedad del constructor al cambiar el prototipo
Hay un efecto secundario crucial al configurar manualmente el prototipo para un nuevo objeto. ¡ Borra la constructorpropiedad! Esta propiedad se puede utilizar para comprobar qué función constructora creó la instancia, pero como la propiedad se sobrescribió, ahora da resultados falsos:

duck.constructor === Bird;
duck.constructor === Object;
duck instanceof Bird;
En orden, estas expresiones se evaluarían como false, truey true.

Para solucionar este problema, siempre que un prototipo se configure manualmente para un nuevo objeto, recuerde definir la constructorpropiedad:

Bird.prototype = {
  constructor: Bird,
  numLegs: 2,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name); 
  }
};
Defina la constructor propiedad en el Dog prototype.
*/

function Dog(name) {
    this.name = name;
  }
  
  // Only change code below this line
  Dog.prototype = {
    constructor: Dog,
    numLegs: 4,
    eat: function() {
      console.log("nom nom nom");
    },
    describe: function() {
      console.log("My name is " + this.name);
    }
  };
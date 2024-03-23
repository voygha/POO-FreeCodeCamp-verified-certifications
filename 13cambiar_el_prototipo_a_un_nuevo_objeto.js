/**
 * 
 * 
Cambiar el prototipo a un nuevo objeto
Hasta ahora has estado agregando propiedades a cada prototypeindividuo:

Bird.prototype.numLegs = 2;
Esto se vuelve tedioso después de más de unas pocas propiedades.

Bird.prototype.eat = function() {
  console.log("nom nom nom");
}

Bird.prototype.describe = function() {
  console.log("My name is " + this.name);
}
Una forma más eficaz es establecerlo prototypeen un nuevo objeto que ya contenga las propiedades. De esta forma, las propiedades se añaden todas a la vez:

Bird.prototype = {
  numLegs: 2, 
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};
Agregue la propiedad numLegsy los dos métodos eat()y describe()al prototypede Dogestableciendo el prototypeen un nuevo objeto.
 */

function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype = {
    // Only change code below this line
    numLegs: 4,
    eat: function() {
      console.log("Holaaaaaa");
    },
    describe: function(){
      console.log("My name is " + this.name);
    }
  };
  
  console.log(Dog.prototype);
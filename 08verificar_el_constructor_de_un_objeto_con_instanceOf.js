/*
Verificar el constructor de un objeto con instancia de
Cada vez que una función constructora crea un nuevo objeto, se dice que ese objeto es una instancia de su constructor. JavaScript ofrece una forma cómoda de verificar esto con el instanceofoperador. instanceofle permite comparar un objeto con un constructor, devolviendo trueo falsebasándose en si ese objeto fue creado o no con el constructor. He aquí un ejemplo:

let Bird = function(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}

let crow = new Bird("Alexis", "black");

crow instanceof Bird;
Este instanceofmétodo devolvería true.

Si un objeto se crea sin utilizar un constructor, instanceofverificaremos que no sea una instancia de ese constructor:

let canary = {
  name: "Mildred",
  color: "Yellow",
  numLegs: 2
};

canary instanceof Bird;
Este instanceofmétodo devolvería false.

Cree una nueva instancia del Houseconstructor, llamándolo myHousey pasando varios dormitorios. Luego, use instanceofpara verificar que sea una instancia de House.
*/

function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
  }
  
  let myHouse = new House(4);
  
  console.log(myHouse instanceof House);
  // Only change code below this line
/*
Utilice un constructor para crear objetos
Aquí está el Birdconstructor del desafío anterior:

function Bird() {
  this.name = "Albert";
  this.color  = "blue";
  this.numLegs = 2;
}

let blueBird = new Bird();
NOTA: this dentro del constructor siempre se refiere al objeto que se está creando.

Observe que el newoperador se utiliza al llamar a un constructor. Esto le dice a JavaScript que cree una nueva instancia de Birdcall blueBird. Sin el newoperador, thisel constructor interno no apuntaría al objeto recién creado, dando resultados inesperados. Ahora blueBirdtiene todas las propiedades definidas dentro del Birdconstructor:

blueBird.name;
blueBird.color;
blueBird.numLegs;
Como cualquier otro objeto, se puede acceder y modificar sus propiedades:

blueBird.name = 'Elvira';
blueBird.name;
Utilice el Dogconstructor de la última lección para crear una nueva instancia de Dog, asignándola a una variable hound.
*/

function Dog() {
    this.name = "Rupert";
    this.color = "brown";
    this.numLegs = 4;
  }
  // Only change code below this line
  
  let hound=  new Dog();
  
  
  console.log(hound);
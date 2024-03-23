/*
Agregar métodos después de la herencia
Una función constructora que hereda su prototypeobjeto de una función constructora de supertipo aún puede tener sus propios métodos además de los métodos heredados.

Por ejemplo, Birdes un constructor que hereda prototypede Animal:

function Animal() { }
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};
function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;
Además de lo que se hereda de Animal, desea agregar un comportamiento que sea exclusivo de Birdlos objetos. Aquí Birdobtendrá una fly()función. Las funciones se agregan de Bird's prototypela misma manera que cualquier función constructora:

Bird.prototype.fly = function() {
  console.log("I'm flying!");
};
Ahora las instancias de Birdtendrán ambos métodos eat()y fly():

let duck = new Bird();
duck.eat();
duck.fly();
duck.eat()mostraría la cadena nom nom nomen la consola y duck.fly()mostraría la cadena I'm flying!.

Agregue todo el código necesario para que el Dogobjeto herede Animaly el Dogconstructor prototypese establezca en Dog. Luego agregue un bark()método al Dogobjeto para que beaglepueda realizar tanto eat()como bark(). El bark()método debería imprimirse Woof!en la consola.
*/


function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

// Only change code below this line
Dog.prototype =Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;



// Only change code above this line
Dog.prototype.bark = function(){
  console.log("Woof!");
}

let beagle = new Dog();

beagle.eat();
beagle.bark();
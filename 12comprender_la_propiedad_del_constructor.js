/*
Comprender la propiedad del constructor
Hay una constructorpropiedad especial ubicada en las instancias de objetos ducky beagleque fueron creadas en los desafíos anteriores:

let duck = new Bird();
let beagle = new Dog();

console.log(duck.constructor === Bird); 
console.log(beagle.constructor === Dog);
Ambas console.logllamadas se mostrarían trueen la consola.

Tenga en cuenta que la constructorpropiedad es una referencia a la función constructora que creó la instancia. La ventaja de la constructorpropiedad es que es posible verificarla para saber qué tipo de objeto es. A continuación se muestra un ejemplo de cómo se podría utilizar esto:

function joinBirdFraternity(candidate) {
  if (candidate.constructor === Bird) {
    return true;
  } else {
    return false;
  }
}
Nota: Dado que la constructorpropiedad se puede sobrescribir (lo cual se tratará en los dos próximos desafíos), generalmente es mejor usar el instanceofmétodo para verificar el tipo de un objeto.

Escriba una joinDogFraternityfunción que tome un candidateparámetro y, usando la constructorpropiedad, devuelva truesi el candidato es a Dog; de lo contrario, devuelva false.
*/

function Dog(name) {
    this.name = name;
  }
  
  let duck = new Dog();
  // Only change code below this line
  function joinDogFraternity(candidate) {
    if(candidate.constructor === Dog){
      return true;
    }
    else{
      return false;
    }
  }
  
  console.log(joinDogFraternity(duck));
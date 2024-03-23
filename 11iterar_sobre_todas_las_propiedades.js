/*
Iterar sobre todas las propiedades
Ya has visto dos tipos de propiedades: propiedades propias y prototypepropiedades. Las propiedades propias se definen directamente en la propia instancia del objeto. Y las propiedades del prototipo se definen en el archivo prototype.

function Bird(name) {
  this.name = name;  //own property
}

Bird.prototype.numLegs = 2; // prototype property

let duck = new Bird("Donald");
Así es como se agregan ducklas propiedades propias de la matriz ownPropsy prototypelas propiedades de la matriz prototypeProps:

let ownProps = [];
let prototypeProps = [];

for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}

console.log(ownProps);
console.log(prototypeProps);
console.log(ownProps)se mostraría ["name"]en la consola y console.log(prototypeProps)se mostraría ["numLegs"].

Agregue todas las propiedades propias de beaglea la matriz ownProps. Agregue todas las prototypepropiedades de Doga la matriz prototypeProps.
*/

function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype.numLegs = 4;
  
  let beagle = new Dog("Snoopy");
  
  let ownProps = [];
  let prototypeProps = [];
  
  // Only change code below this line
  
  for(let property in beagle){
    if(beagle.hasOwnProperty(property)){
      ownProps.push(property);
    }
    else{
      prototypeProps.push(property);
    }
  }
  
  console.log(ownProps);
  console.log(prototypeProps);
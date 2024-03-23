/*
Comprender las propiedades propias
En el siguiente ejemplo, el Birdconstructor define dos propiedades: namey numLegs:

function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let duck = new Bird("Donald");
let canary = new Bird("Tweety");
namey numLegsse denominan propiedades propias porque se definen directamente en el objeto de instancia. Eso significa que duckcada canaryuno tiene su propia copia separada de estas propiedades. De hecho, cada instancia de Birdtendrá su propia copia de estas propiedades. El siguiente código agrega todas las propiedades propias de ducka la matriz ownProps:

let ownProps = [];

for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

console.log(ownProps);
La consola mostraría el valor ["name", "numLegs"].

Agregue las propiedades propias de canarya la matriz ownProps.
*/

function Bird(name) {
    this.name = name;
    this.numLegs = 2;
  }
  
  let canary = new Bird("Tweety");
  let ownProps = [];
  // Only change code below this line
  
  
  
  for (let property in canary) {
    if(canary.hasOwnProperty(property)) {
      ownProps.push(property);
    }
  }
  
  console.log(ownProps);
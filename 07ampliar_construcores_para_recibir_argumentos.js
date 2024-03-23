/*
Ampliar constructores para recibir argumentos
Los constructores Birdy Dogdel último desafío funcionaron bien. Sin embargo, observe que todos Birdslos que se crean con el Birdconstructor se denominan automáticamente Albert, son de color azul y tienen dos patas. ¿Qué pasa si quieres pájaros con diferentes valores de nombre y color? Es posible cambiar las propiedades de cada ave manualmente, pero eso supondría mucho trabajo:

let swan = new Bird();
swan.name = "Carlos";
swan.color = "white";
Suponga que está escribiendo un programa para realizar un seguimiento de cientos o incluso miles de aves diferentes en un aviario. Tomaría mucho tiempo crear todas las aves y luego cambiar las propiedades a valores diferentes para cada una. Para crear diferentes Birdobjetos más fácilmente, puede diseñar su constructor Bird para que acepte parámetros:

function Bird(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}
Luego, pase los valores como argumentos para definir cada pájaro único en el Birdconstructor: let cardinal = new Bird("Bruce", "red");esto proporciona una nueva instancia de Birdwith namey colorpropiedades establecidas en Brucey red, respectivamente. La numLegspropiedad todavía está establecida en 2. cardinalTiene estas propiedades:

cardinal.name
cardinal.color
cardinal.numLegs
El constructor es más flexible. Ahora es posible definir las propiedades de cada uno Birden el momento de su creación, que es una de las formas en que los constructores de JavaScript son tan útiles. Agrupan objetos en función de características y comportamientos compartidos y definen un modelo que automatiza su creación.

Crea otro Dogconstructor. Esta vez, configúrelo para tomar los parámetros namey colory fije la propiedad numLegsen 4. Luego cree uno nuevo Dogguardado en una variable terrier. Pásele dos cadenas como argumentos para las propiedades namey color.


*/

function Dog(name,color) {
    this.name = name;
    this.color = color;
    this.numLegs =4;
  }
  
  let terrier = new Dog("Pelusa","Black");
  
  console.log(terrier);
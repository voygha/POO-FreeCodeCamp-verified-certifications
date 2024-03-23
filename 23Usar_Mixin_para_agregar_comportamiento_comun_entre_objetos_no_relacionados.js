/*
Utilice un Mixin para agregar un comportamiento común entre objetos no relacionados
Como has visto, el comportamiento se comparte a través de la herencia. Sin embargo, hay casos en los que la herencia no es la mejor solución. La herencia no funciona bien para objetos no relacionados como Birdy Airplane. Ambos pueden volar, pero uno Birdno es un tipo de Airplaney viceversa.

Para objetos no relacionados, es mejor usar mixins . Un mixin permite que otros objetos utilicen una colección de funciones.

let flyMixin = function(obj) {
  obj.fly = function() {
    console.log("Flying, wooosh!");
  }
};
Toma flyMixincualquier objeto y le da el flymétodo.

let bird = {
  name: "Donald",
  numLegs: 2
};

let plane = {
  model: "777",
  numPassengers: 524
};

flyMixin(bird);
flyMixin(plane);
Aquí birdy planese pasan a flyMixin, que luego asigna la flyfunción a cada objeto. Ahora birdy planeambos pueden volar:

bird.fly();
plane.fly();
La consola mostraría la cadena Flying, wooosh!dos veces, una por cada .fly()llamada.

Observe cómo el mixin permite que flyobjetos no relacionados reutilicen el mismo método birdy plane.

Cree un mixin llamado glideMixinque defina un método llamado glide. Luego usa para glideMixindarle a ambos birdy boatla capacidad de deslizarse.
*/

let bird = {
    name: "Donald",
    numLegs: 2
  };
  
  let boat = {
    name: "Warrior",
    type: "race-boat"
  };
  
  // Only change code below this line
  
  let glideMixin = function(obj){
    obj.glide = function(){
      console.log("Glide ....");
    }
  }
  
  glideMixin(bird);
  
  glideMixin(boat);
  
  boat.glide();
  bird.glide();
  
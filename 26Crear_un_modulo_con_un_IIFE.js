/*
Utilice un IIFE para crear un módulo
Una expresión de función de invocación inmediata (IIFE) se utiliza a menudo para agrupar funciones relacionadas en un único objeto o módulo . Por ejemplo, un desafío anterior definió dos mixins:

function glideMixin(obj) {
  obj.glide = function() {
    console.log("Gliding on the water");
  };
}
function flyMixin(obj) {
  obj.fly = function() {
    console.log("Flying, wooosh!");
  };
}
Podemos agrupar estos mixins en un módulo de la siguiente manera:

let motionModule = (function () {
  return {
    glideMixin: function(obj) {
      obj.glide = function() {
        console.log("Gliding on the water");
      };
    },
    flyMixin: function(obj) {
      obj.fly = function() {
        console.log("Flying, wooosh!");
      };
    }
  }
})();
Tenga en cuenta que tiene una expresión de función invocada inmediatamente (IIFE) que devuelve un objeto motionModule. Este objeto devuelto contiene todos los comportamientos mixin como propiedades del objeto. La ventaja del patrón de módulo es que todos los comportamientos de movimiento se pueden empaquetar en un solo objeto que luego puede ser utilizado por otras partes de su código. Aquí hay un ejemplo usándolo:

motionModule.glideMixin(duck);
duck.glide();
Cree un módulo llamado funModulepara envolver los dos mixins isCuteMixiny singMixin. funModuledebería devolver un objeto.
*/

let isCuteMixin = function(obj) {
    obj.isCute = function() {
      return true;
    };
  };
  let singMixin = function(obj) {
    obj.sing = function() {
      console.log("Singing to an awesome tune");
    };
  };
  let funModule = (function(){
    return{
      isCuteMixin: function(obj){
        obj.isCute = function(){
          return true;
        }
      },
      singMixin: function(obj){
        obj.sing = function(){
          console.log("Singing to an awesome tune");
        }
      }
    }
  })();
  
  
  
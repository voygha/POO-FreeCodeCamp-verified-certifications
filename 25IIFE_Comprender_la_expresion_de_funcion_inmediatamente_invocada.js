/*
Comprender la expresión de función inmediatamente invocada (IIFE)
Un patrón común en JavaScript es ejecutar una función tan pronto como se declara:

(function () {
  console.log("Chirp, chirp!");
})();
Esta es una expresión de función anónima que se ejecuta de inmediato y genera resultados Chirp, chirp!inmediatamente.

Tenga en cuenta que la función no tiene nombre y no está almacenada en una variable. Los dos paréntesis () al final de la expresión de la función hacen que se ejecute o invoque inmediatamente. Este patrón se conoce como expresión de función inmediatamente invocada o IIFE .

Vuelva a escribir la función makeNesty elimine su llamada para que sea una expresión de función anónima inmediatamente invocada (IIFE).


*/

(function () {
    console.log("A cozy nest is ready");
  })();
  
  
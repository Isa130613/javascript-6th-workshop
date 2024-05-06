function crearSumador(n) {
  return function sumador2(m) {
    return n + m;
  };
}

let sumarCinco = crearSumador(5);
let resultado = sumarCinco(3);

console.log(resultado);

let sumarCuatro = crearSumador(4);
let sumarSeis = sumarCuatro(6);

console.log(sumarSeis);

let sumarDos = crearSumador(2);
let sumarDiez = sumarDos(10);

console.log(sumarDiez);

// Preguntas

// 1. ¿Cómo mantienen las funciones su acceso a variables externas después de que la función externa haya terminado de ejecutarse? Al defnirse una función, las variables dentro de su definición son capturadas, permitiendo el acceso a la función interna, ya que el cierre guarda una referencia a las variables que va a necesitar.

// 2. ¿Cuáles son las implicaciones de memoria de mantener estos closures, especialmente si se crean muchas instancias de funciones con closure? El gasto de memoria innecesario con cada uso de este closure.

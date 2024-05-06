const correcto = [1, 5, 4, 2, 3];

let orden = prompt(
  'Ingresa el orden de salida de los console.log separados por espacios según el orden en que aparecen en el código (Ejemplo: 1 2 3 4 5).'
).split(' ');

orden = orden.map((el) => parseInt(el));

let iguales = true;

if (orden.length == correcto.length) {
  for (let i = 0; i < orden.length; i++) {
    if (orden[i] !== correcto[i]) {
      iguales = false;
      break;
    }
  }
} else {
  iguales = false;
}

if (orden.some((el) => isNaN(el)) || !orden.every((el) => el >= 1 && el <= 5)) {
  alert(
    'Tu respuesta debe contener únicamente números enteros dentro del rango especificado. Por favor vuelve a empezar.'
  );
} else {
  alert('Resultados...');

  if (iguales) {
    alert('¡Felicidades! Acertaste en todas.');
  } else {
    if (orden[0] != correcto[0] || orden[1] != correcto[1]) {
      alert(
        'El primer y último console.log aparecen primero ya que no están dentro de ninguna promesa o callback.'
      );
    }

    if (orden[2] != correcto[2]) {
      alert(
        'El console.log de la promesa es el tercero en ejecutarse porque las promesas tienen prioridad sobre las funciones registradas con setTimeout, además del promise.resolve que la resuelve inmediatamente.'
      );
    }

    if (orden[3] != correcto[3] || orden[4] != correcto[4]) {
      alert(
        'Los setTimeout son los últimos en ejecutarse y en el orden de su declaración ya que son los que tienen la menor prioridad en la cola de microtareas.'
      );
    }
  }
}

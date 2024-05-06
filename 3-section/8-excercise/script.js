let continuar = true;
let contador = 0;

while (continuar) {
  let aumentar = Boolean(
    prompt('Escribe algo para aumentar el contador, y nada para salir')
  );
  if (aumentar) {
    contador++;
    alert(`El valor del contador actualmente es ${contador}`);
  } else {
    alert('Programa terminado.');
    continuar = false;
  }
}

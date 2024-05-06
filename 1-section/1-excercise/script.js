let primera = confirm(
  '1.¿Es posible acceder a la variable globalVariable en cualquier parte del código?'
);
let segunda = confirm(
  '2. ¿Es posible acceder a la variable functionVariable desde cualquier parte del código?'
);
let tercera = confirm(
  '3. ¿Es posible acceder a la variable blockVariable en cualquier parte del código?'
);

alert('Calificación...');
alert('La primera pregunta es... ');
if (primera) {
  alert(
    '¡Correcto! Las variables globales son accesibles desde cualquier parte del código.'
  );
} else {
  alert(
    'Incorrecto. Las variables globales son accesibles desde cualquier parte del código.'
  );
}

alert('La segunda pregunta es...');
if (segunda) {
  alert(
    'Incorrecto. Las variables de función sólo pueden ser accedidas dentro de la función, a menos que se declaren como globales.'
  );
} else {
  alert(
    '¡Correcto! Las variables de función sólo pueden ser accedidas dentro de la función, a menos que se declaren como globales.'
  );
}

alert('La tercera pregunta es...');
if (tercera) {
  alert(
    'Incorrecto. Las variables de bloque sólo pueden ser accedidas dentro del bloque en el que están declaradas.'
  );
} else {
  alert(
    '¡Correcto! Las variables de bloque sólo pueden ser accedidas dentro del bloque en el que están declaradas.'
  );
}

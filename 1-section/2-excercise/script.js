alert('Primera parte:');
let a = confirm('¿El console.log del valor de a retorna su valor declarado?');
let b = confirm('¿El console.log del valor de b retorna su valor declarado?');
let c = confirm('¿El console.log del valor de b retorna su valor declarado?');

alert('Segunda parte:');
let declarada = confirm(
  '¿El console.log del resultado de la función declarada retorna el texto en el return de la función?'
);
let expresada = confirm(
  '¿El console.log del resultado de la función expresada retorna el texto en el return de la función?'
);

alert('Resultados...');
alert('Primera parte...');
if (!a && !b && !c) {
  alert(
    '¡Correcto! No es posible acceder a una variable antes de su declaración.'
  );
} else {
  alert(
    'Incorrecto. No es posible acceder a una variable antes de su declaración.'
  );
}

alert('Segunda parte...');
if (declarada) {
  alert(
    '¡Correcto! Es posible acceder a una función declarada antes de su definición.'
  );
} else {
  alert(
    'Incorrecto. Sí es posible acceder a una función declarada antes de su definición.'
  );
}

if (expresada) {
  alert(
    'Incorrecto. No es posible llamar a una función expresada antes de su definición.'
  );
} else {
  ('¡Correcto! No es posible llamar a una función expresada antes de su definición.');
}

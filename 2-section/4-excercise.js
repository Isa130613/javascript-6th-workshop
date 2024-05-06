console.log("Intentando llamar a 'funcionDeclarada' antes de su declaración:");
try {
  console.log(funcionDeclarada());
} catch (error) {
  console.log('Error:', error.message);
}

console.log("Intentando llamar a 'funcionExpresada' antes de su declaración:");
try {
  console.log(funcionExpresada());
} catch (error) {
  console.log('Error:', error.message);
}

// Declaración de una función declarada
function funcionDeclarada() {
  return 'Función declarada ha sido llamada.';
}

// Declaración de una función expresada
const funcionExpresada = function () {
  return 'Función expresada ha sido llamada.';
};

console.log("Llamando a 'funcionDeclarada' después de su declaración:");
console.log(funcionDeclarada());

console.log("Llamando a 'funcionExpresada' después de su declaración:");
console.log(funcionExpresada());

// Reflexión

// 1. ¿Qué sucedió cuando intentaste llamar a las funciones antes de su declaración? La función declarada retornó que la función declarada ha sido llamada, la expresada retornó un error indicando que no se puede acceder a ella antes de su inicialización. Después, al llamarse ambas funciones después de su inicialización, ambas retornaron los resultados esperados.

// 2. ¿Cómo difieren los resultados entre la función declarada y la función expresada? All llamar las funciones antes de su inicialización, la función declarada fue llamada exitosamente, mientras que la expresada retornó un error.

// 3. ¿Qué indica esto sobre cómo el JavaScript maneja estas dos diferentes declaraciones de funciones? Que las funciones declaradas son 'elevadas' al principio del código para permitir su llamado desde cualquier parte del código, mientras que las funciones expresadas no tienen este trato.

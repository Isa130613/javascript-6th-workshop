console.log('Mensaje 1: inmediatamente');
setTimeout(() => console.log('Mensaje 2: con Timeout de 0 segundos'), 0);
setTimeout(() => console.log('Mensaje 3: con Timeout de 1 segundo'), 1000);

// Reflexión y análisis
// ¿Por qué "Mensaje 2: Con timeout de 0 segundos" no se muestra inmediatamente después de "Mensaje 1: Inmediatamente", a pesar de tener un retardo de 0 segundos? SetTimeout no garantiza que se ejecute la función especificada exactamente en ese tiempo, sino que funciona poniendo la ejecución de la función en la cola de tareas, permitiendo que el motor de javascript continúe con otras tareas que no se pongan en esta cola.

// ¿Que nos dicen este comportamiento sobre el event loop, las macro y micro tareas, y la forma en que JavaScript maneja las operaciones asíncronas? Ya que javascript tiene un sólo hilo de ejecución y un event loop, haciendo que al ejecutar el código las tareas se agreguen a la call stack, llamando la próxima tarea de esta cola cuando la pila de llamadas está vacía, colocando la próxima en la pila de llamadas para ser ejecutada.

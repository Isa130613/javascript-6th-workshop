function manejarAsincronia(callback, promesa) {
  let nuevaPromesa = new Promise((res, rej) => {
    setTimeout(() => {
      console.log('Promesa resuelta.');
      res([1, 2, 3]);
    }, 2000);
  });

  return promesa
    .then(callback)
    .then(() => nuevaPromesa)
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((err) => console.error('Error:', err));
}

manejarAsincronia(
  () => console.log('Callback de parámetro'),
  Promise.resolve()
);

// ¿Qué sucede si cambias el tiempo de resolución de la promesa a 5 segundos o a 1 segundo? El callback se ejecutará después de ese tiempo.

// ¿Cómo se comporta la función si la promesa es rechazada en lugar de resuelta? Se interrumpe la ejecución del resto

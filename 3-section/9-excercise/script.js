let tiempo = parseInt(
  prompt('Por favor ingresa el número de segundos que quieres de espera.')
);

if (isNaN(tiempo)) {
  alert('Tu respuesta debe ser un número.');
} else {
  setTimeout(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        if (!res.ok) {
          throw new Error('La respuesta no fue ok.');
        }
        return res.json();
      })
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }, tiempo * 1000);
}

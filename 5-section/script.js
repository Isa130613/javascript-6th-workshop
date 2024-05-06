const url = './data.json';
let rooms;
let roomTypes;
let bookings = [];

function cargarYMostrarData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Error al cargar los datos.');
          }
          return response.json();
        })
        .then((data) => {
          console.log('Habitaciones:', data.rooms);
          console.log('Tipos de Habitaciones:', data.roomTypes);
          resolve(data);
        })
        .catch((error) => {
          console.error(error);
          reject(error);
        });
    }, 3000);
  });
}

function verificarDisponibilidad(room, roomTypes, people) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (
        room.availability &&
        roomTypes.find((el) => el.id === room.roomTypeId).capacity >= people
      ) {
        res();
      } else {
        rej();
      }
    }, 3000);
  });
}

function reservarHabitacion(numeroHabitacion, fechaInicio, fechaFin, huesped) {
  const generateId = generarGeneradorId();
  const bookingId = generateId();

  let newBooking = {
    id: bookingId,
    room: numeroHabitacion,
    start: fechaInicio,
    end: fechaFin,
    guest: huesped,
  };
  bookings.push(newBooking);
  console.log(`Reserva exitosa: ${Object.values(newBooking).join(', ')}`);

  function generarGeneradorId() {
    let id = 1;

    return function () {
      return id++;
    };
  }
}

function usuarioReserva() {
  const people = parseInt(prompt('Ingrese cuántas personas se alojarán'));

  if (isNaN(people)) {
    throw new Error('El número de personas tiene que ser un entero.');
  }

  const roomToReserve = prompt(
    'Ingrese el numero de habitacion a reservar: ' +
      rooms
        .map((room) => {
          return `\nRoom Number: ${room.number} (${
            roomTypes.find((type) => type.id === room.roomTypeId).name
          })`;
        })
        .join(', ')
  );

  let room = rooms.find((el) => el.number == roomToReserve);

  if (room != undefined) {
    verificarDisponibilidad(room, roomTypes, people)
      .then(() => {
        console.log(
          `La habitación ${roomToReserve} está disponible y cumple con los requisitos.`
        );

        let fechaInicio = new Date(
          prompt('Ingrese la fecha de inicio en el formato dd-mm-aaaa')
        );

        let fechaFin = new Date(
          prompt('Ingrese la fecha de fin en el formato dd-mm-aaaa')
        );

        if (
          fechaFin < fechaInicio ||
          fechaFin < new Date('01-01-1920') ||
          fechaInicio < new Date('01-01-1920') ||
          fechaInicio.toString() == 'Invalid Date' ||
          fechaFin.toString() == 'Invalid Date'
        ) {
          throw new Error(
            'Las fechas deben ser válidas, la fecha de fin no puede ser anterior a la fecha de inicio, y las fechas no pueden ser anteriores al año 1920'
          );
        }

        let person = prompt(
          'Ingrese el nombre de la persona a la cual se asignará la reserva'
        )
          .toLowerCase()
          .trim();

        rooms[rooms.indexOf(room)].availability = false;
        reservarHabitacion(roomToReserve, fechaInicio, fechaFin, person);
      })
      .catch(() => {
        console.log(
          `La habitación ${roomToReserve} no está disponible, no cumple con los requisitos o no existe.`
        );
      });
  }
}

function visualizarReservas() {
  const guestName = prompt(
    'Por favor ingrese el nombre completo del huésped del que se quiere ver sus reservas'
  )
    .trim()
    .toLowerCase();
  let show = [];

  bookings.forEach((el) => {
    if (el.guest === guestName) {
      show.push(el);
    }
  });

  if (show.length > 0) {
    console.log(show.map((el) => `{${Object.values(el).join(', ')}} `));
  } else {
    console.log(`No hay reservas al nombre de ${guestName}`);
  }
}

function cancelarReserva() {
  const name = prompt(
    'Por favor ingrese el nombre de la persona que reservó la habitación a cancelar'
  )
    .toLowerCase()
    .trim();

  const number = prompt(
    'Por favor ingrese el número de la habitación que desee cancelar'
  ).trim();

  let booking = bookings.find((el) => el.guest === name && el.room == number);
  bookings = bookings.filter((item) => item !== booking);

  let room = rooms.find((el) => el.number == number);

  if (room == undefined || booking == undefined) {
    alert('Habitación o reserva inválida');
  } else {
    room.availability = true;
    alert('Reserva cancelada exitosamente');
  }
}

function editarReserva() {
  const guest = prompt(
    'Ingrese el nombre completo del huésped cuya reserva desea editar'
  )
    .trim()
    .toLowerCase();

  let guestBookings = [];

  bookings.forEach((el) => {
    if (el.guest == guest) {
      guestBookings.push(el);
    }
  });

  if (guestBookings.length < 1) {
    alert(`No hay reservas al nombre de ${guest}`);
  } else {
    console.log(
      `Las reservas al nombre de ${guest} son: ${guestBookings.map(
        (el) => `{${Object.values(el).join(', ')}} `
      )}`
    );

    const bookingId = prompt('Por favor ingresa el id de la reserva');
    let bookingEdit = guestBookings.find((el) => el.id == bookingId);

    if (bookingEdit == undefined) {
      alert('Id de reserva inválido');
    } else {
      let newStart = new Date(
        prompt(
          'Por favor ingrese la nueva fecha de inicio en el formato dd-mm-aaaa. Si no desea cambiarla, deje este campo vacío'
        ).trim()
      );
      if (newStart.toString() != 'Invalid date' && newStart < bookingEdit.end) {
        bookingEdit.start = newStart;
      }

      let newEnd = new Date(
        prompt(
          'Por favor ingrese la nueva fecha de fin en el formato dd-mm-aaaa. Si no desea cambiarla, deje este campo vacío'
        ).trim()
      );

      if (newEnd.toString() != 'Invalid date' && newEnd > bookingEdit.start) {
        bookingEdit.end = newEnd;
      }

      console.log(
        `Modificación de reserva exitosa: ${Object.values(bookingEdit).join(
          ', '
        )}`
      );
    }
  }
}

cargarYMostrarData()
  .then((data) => {
    rooms = data.rooms;
    roomTypes = data.roomTypes;

    document.getElementById('booking-button').addEventListener('click', () => {
      usuarioReserva();
    });

    document
      .getElementById('visualize-button')
      .addEventListener('click', () => {
        visualizarReservas();
      });

    document.getElementById('cancel-button').addEventListener('click', () => {
      cancelarReserva();
    });

    document.getElementById('edit-button').addEventListener('click', () => {
      editarReserva();
    });
  })
  .catch((error) => {
    console.error('Error al manejar la promesa:', error);
  });

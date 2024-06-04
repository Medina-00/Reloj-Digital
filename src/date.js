setInterval(() => {
  let fecha = new Date();
  const meses = [
    "ENERO",
    "FEBRERO",
    "MARZO",
    "ABRIL",
    "MAYO",
    "JUNIO",
    "JULIO",
    "AGOSTO",
    "SEPTIEMBRE",
    "OCTUBRE",
    "NOVIEMBRE",
    "DICIEMBRE"
  ];

  const dias = [
    "LUNES",
    "MARTES",
    "MIÉRCOLES",
    "JUEVES",
    "VIERNES",
    "SÁBADO",
    "DOMINGO"
  ];
  let fechaActual = document.querySelector('.fecha')
  let horaActual = document.querySelector(".hora");
  horaActual.innerHTML = `HORA ACTUAL : ${fecha.getHours()} : ${fecha.getMinutes()} : ${fecha.getSeconds()}`;
  fechaActual.innerHTML = `FCEHA ACTUAL : ${dias[fecha.getDay()]} - ${fecha.getDate()}  / ${meses[fecha.getMonth()]} / ${fecha.getFullYear()}`


  let contendor = document.querySelector('.contenedor__content');
    contendor.classList.toggle('outlined');
    contendor.classList.toggle('cambiar_fondo')
}, 1000);



console.log(fecha);
console.log(mes);
console.log(dia);
console.log(year);

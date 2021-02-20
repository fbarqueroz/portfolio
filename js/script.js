/* eslint-disable quotes */
/* eslint-disable linebreak-style */

function agregarMensajeDeError(camposInvalidos) {
  const errorElemnt = document.createElement("div");
  errorElemnt.classList.add("mensaje-error");

  // AQUI VAMOS A ESCRIBIR EL MENSAJE DE ERROR
  const mensajeInvalidoTitulo = document.createElement("h2");
  mensajeInvalidoTitulo.innerText =
    "Ocurrio un error, verifica los siguientes campos:";

  const listaInvalidoInput = document.createElement("ul");

  camposInvalidos.forEach((elementInvalido) => {
    const li = document.createElement("li");
    li.innerText = elementInvalido.getAttribute("name");

    listaInvalidoInput.appendChild(li);
  });

  errorElemnt.appendChild(mensajeInvalidoTitulo);
  errorElemnt.appendChild(listaInvalidoInput);

  form.parentNode.insertBefore(errorElemnt, form);
}

function dameLosCamposInvalidos(inputsRequeridos) {
  const invalidos = [];

  inputsRequeridos.forEach((actualInput) => {
    if (actualInput.value === "") {
      invalidos.push(actualInput);
      actualInput.style.border = "1px solid red";
    } else {
      actualInput.style.border = "";
    }
  });

  return invalidos;
}

function reiniciarMensajesDeError() {
  const mensajeDeErrror = document.querySelector(".mensaje-error");
  if (mensajeDeErrror) {
    mensajeDeErrror.remove();
  }

  const mensajeDeExito = document.querySelector(".mensaje-valido");
  if (mensajeDeExito) {
    mensajeDeExito.remove();
  }
}

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  reiniciarMensajesDeError();
  const inputsRequeridos = document.querySelectorAll(".requerido");
  e.preventDefault();
  const invalidos = dameLosCamposInvalidos(inputsRequeridos);
  // Si tenemos campos invalidos
  if (invalidos.length > 0) {
    agregarMensajeDeError(invalidos);
  } else {
    agregarMensajeDeExito();
  }
});

// Script del switch para el dark mode

const buttonSwitch = document.querySelector('#switch');
buttonSwitch.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  buttonSwitch.classList.toggle('active');
});

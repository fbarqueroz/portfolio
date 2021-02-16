/* eslint-disable quotes */
/* eslint-disable linebreak-style */

function agregarMensajeDeExito() {
  const validoElemnt = document.createElement("div");
  validoElemnt.classList.add("mensaje-valido");

  validoElemnt.innerText = "Su formulario fue enviado";

  document.body.appendChild(validoElemnt);
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

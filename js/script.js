/* eslint-disable quotes */
function agregarMensajeDeError(camposInvalidos) {
  const errorElemnt = document.createElement("div");
  errorElemnt.classList.add("mensaje-error");

  // AQUI VAMOS A ESCRIBIR EL MENSAJE DE ERROR
  const mensajeInvalidoTitulo = document.createElement("h2");
  mensajeInvalidoTitulo.innerText = "Ocurrio un error, verifica los siguientes campos:";

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

form.addEventListener("submit", function(e) {
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

// Fetch Github API

/*

API information

"login": "fbarqueroz",
"id": 65320282,
"node_id": "MDQ6VXNlcjY1MzIwMjgy",
"avatar_url": "https://avatars.githubusercontent.com/u/65320282?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/fbarqueroz",
"html_url": "https://github.com/fbarqueroz",
"followers_url": "https://api.github.com/users/fbarqueroz/followers",
"following_url": "https://api.github.com/users/fbarqueroz/following{/other_user}",
"gists_url": "https://api.github.com/users/fbarqueroz/gists{/gist_id}",
"starred_url": "https://api.github.com/users/fbarqueroz/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/fbarqueroz/subscriptions",
"organizations_url": "https://api.github.com/users/fbarqueroz/orgs",
"repos_url": "https://api.github.com/users/fbarqueroz/repos",
"events_url": "https://api.github.com/users/fbarqueroz/events{/privacy}",
"received_events_url": "https://api.github.com/users/fbarqueroz/received_events",
"type": "User",
"site_admin": false,
"name": null,
"company": "CETAV",
"blog": "",
"location": null,
"email": null,
"hireable": null,
"bio": null,
"twitter_username": null,
"public_repos": 54,
"public_gists": 0,
"followers": 3,
"following": 3,
"created_at": "2020-05-14T00:52:18Z",
"updated_at": "2021-02-23T04:32:58Z"

*/

// Fetch Github API

const url = "https://api.github.com/users/fbarqueroz/repos";
const divRepo = document.querySelector('.fetchContent');

const actualizarDatos = () => {
  fetch(url, {
    method: "GET",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      return response.json();
    })
    .then((data) => {
      const repoList = document.createElement("li");
      repoList.appendChild(divRepo);

      const repoContent = `
      <div class="APIcontent">
      <h2><a href="${data.url}">${data.name}</a></h2>
      </div>
      `;

      divRepo.appendChild(repoContent);
      repoContent.innerHTML = "";
      console.log(data.name);
    });
};

actualizarDatos.innerHTML = "";

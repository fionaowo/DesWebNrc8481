// ============================================================
// SIMULACIÓN DE DATOS DE UNA API (arreglo de objetos)
// ============================================================
const juegos = [
  { id: 1, nombre: "Aventura Espacial", genero: "Acción",    precio: 9990,  color: "primary" },
  { id: 2, nombre: "Reino de Sombras",  genero: "RPG",       precio: 14990, color: "danger"  },
  { id: 3, nombre: "Velocidad Extrema", genero: "Carreras",  precio: 7990,  color: "success" },
  { id: 4, nombre: "Puzzle Mental",     genero: "Puzzle",     precio: 4990,  color: "warning" },
];

// ============================================================
// 1) Armar el ComboBox (select) de forma dinámica con JS puro
// ============================================================
const comboJuegos = document.getElementById("comboJuegos");

// Opción por defecto, creada también con createElement
const optionDefault = document.createElement("option");
optionDefault.textContent = "-- Elige un juego --";
optionDefault.value = "";
comboJuegos.appendChild(optionDefault);

// Recorremos el arreglo (simulando la respuesta de una API)
// y por cada objeto creamos un <option> con una función flecha
juegos.forEach((juego) => {
  const option = document.createElement("option");
  option.value = juego.id;
  option.textContent = `${juego.nombre} - $${juego.precio}`;
  comboJuegos.appendChild(option);
});

// ============================================================
// 2) Pintar el detalle del juego elegido, creando el HTML
//    dinámicamente (document.createElement + appendChild)
// ============================================================
const detalleJuego = document.getElementById("detalleJuego");

const mostrarDetalle = (idSeleccionado) => {
  // Limpiamos lo que había antes
  detalleJuego.innerHTML = "";

  if (!idSeleccionado) return;

  // Buscamos el objeto correspondiente dentro del arreglo "API"
  const juego = juegos.find((j) => j.id === Number(idSeleccionado));
  if (!juego) return;

  // Creamos la columna
  const col = document.createElement("div");
  col.className = "col-md-4";

  // Creamos la card
  const card = document.createElement("div");
  card.className = `card border-${juego.color}`;

  // Creamos el body de la card
  const cardBody = document.createElement("div");
  cardBody.className = "card-body";

  const titulo = document.createElement("h5");
  titulo.className = "card-title";
  titulo.textContent = juego.nombre;

  const genero = document.createElement("p");
  genero.className = "card-text";
  genero.textContent = `Género: ${juego.genero}`;

  const precio = document.createElement("p");
  precio.className = `card-text fw-bold text-${juego.color}`;
  precio.textContent = `Precio: $${juego.precio}`;

  // Vamos armando el árbol de elementos (DOM) con appendChild
  cardBody.appendChild(titulo);
  cardBody.appendChild(genero);
  cardBody.appendChild(precio);
  card.appendChild(cardBody);
  col.appendChild(card);
  detalleJuego.appendChild(col);
};

// Evento: cada vez que cambia el combobox, se redibuja el detalle
comboJuegos.addEventListener("change", (event) => {
  mostrarDetalle(event.target.value);
});

// ============================================================
// 3) Lógica simple del formulario de Login (modal)
// ============================================================
const loginForm = document.getElementById("loginForm");
const loginMsg = document.getElementById("loginMsg");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = document.getElementById("loginEmail").value;
  loginMsg.textContent = `¡Bienvenido, ${email}! Sesión simulada iniciada.`;
});

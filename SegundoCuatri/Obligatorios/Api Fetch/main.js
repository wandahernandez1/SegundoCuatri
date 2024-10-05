"use strict"

let container = document.getElementById("container");
let productos = [];

fetch("https://fakestoreapi.com/products")
  .then(resp => resp.json())
  .then(data => {
    // console.log(data)
    data.forEach(prod => {
      productos.push({
        nombre: prod.title,
        precio: prod.price,
        imagen: prod.image,
        stock: 10,
        creador: 'Fake Store HW ', // Añadido un creador ficticio
        duracion: '7 días restantes',  // Valor de duración ficticio
        descripcion: 'Stock Limitado'
      });

    });

    renderizarCards(productos);
  })
  .catch(err => console.log(err));

//Funcion para renderizar las Cards
function renderizarCards(productos) {
  container.innerHTML = '';

  productos.forEach((prod) => {
    // Aqui empezaremos a crear nuestras card 
    container.innerHTML += ` <div class="bg">
  <div class="card" id="card">
    <div class='main'>
      <img class='tokenImage' src="${prod.imagen}" alt="${prod.nombre}" />
      <h2>${prod.nombre}</h2>
      <p class='description'>${prod.descripcion}</p>
      <div class='tokenInfo'>
        <div class="price">
          <ins>◘</ins>
          <p>$${prod.precio}</p>
        </div>
        <div class="duration">
          <ins>◷</ins>
          <p>${prod.duracion}</p>
        </div>
      </div>
      <hr />
      <div class='creator'>
        <div class='wrapper'>
          <img src="./img/logo.jpg" alt="Creator" />
        </div>
        <p><ins>Creation of</ins> ${prod.creador}</p>
      </div>
    </div>
  </div>
  </div>
`
  })
}
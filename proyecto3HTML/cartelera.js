function cargarCartelera() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'cartelera.json', true);

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        try {
          const data = JSON.parse(xhr.responseText);
          mostrarPeliculas(data);
        } catch(e) {
          console.error('Error al parsear JSON:', e);
        }
      } else {
        console.error('Error al cargar la cartelera. Status:', xhr.status);
      }
    }
  };

  xhr.send();
}

function mostrarPeliculas(peliculas) {
  const contenedor = document.getElementById('cartelera');
  peliculas.forEach(peli => {
    const div = document.createElement('div');
    div.className = 'pelicula';
   div.innerHTML = `
  <img src="${peli.cartel}" alt="${peli.titulo}">
  <h3>${peli.titulo}</h3>
  <p><strong>Director:</strong> ${peli.director}</p>
  <p>${peli.sinopsis}</p>
  <a href="${peli.enlace}" target="_blank">Comprar Entrada</a>
`;
    contenedor.appendChild(div);
  });
}

document.addEventListener('DOMContentLoaded', cargarCartelera);
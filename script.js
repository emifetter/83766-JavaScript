var articulos = [
  {
    id: 1,
    nombre: 'Artículo 1',
    precio: 29.99,
    cantidad: 32,
    imagen: 'art01.jpg',
  },
  {
    id: 2,
    nombre: 'Artículo 2',
    precio: 12.99,
    cantidad: 12,
    imagen: 'art02.jpg',
  },
  {
    id: 3,
    nombre: 'Artículo 3',
    precio: 45.99,
    cantidad: 32,
    imagen: 'art03.jpg',
  },
  {
    id: 4,
    nombre: 'Artículo 4',
    precio: 238.99,
    cantidad: 75,
    imagen: 'art04.jpg',
  },
  {
    id: 5,
    nombre: 'Artículo 5',
    precio: 77.99,
    cantidad: 211,
    imagen: 'art05.jpg',
  },
  {
    id: 6,
    nombre: 'Artículo 6',
    precio: 84.99,
    cantidad: 4,
    imagen: 'art06.jpg',
  },
];
function cargar() {}

function cargarArticulos() {
  var texto = '';
  var texto =
    '<table class="table table-bordered table-striped table-hover table-sm"> <thead"> <tr> <th>IdArticuloFamilia</th> <th>Nombre</th> <th>Precio</th><th>Cantidad</th> <th>Imagen</th> </tr> </thead> <tbody>';

  for (var i = 0; i < articulos.length; i++) {
    var linea =
      '<tr><td>' +
      articulos[i].id +
      '</td><td>' +
      articulos[i].nombre +
      '</td><td>' +
      articulos[i].precio +
      '</td><td>' +
      articulos[i].cantidad +
      '</td><td>' +
      articulos[i].imagen +
      '</td></tr>';
    var texto = texto + linea;
  }

  texto = texto + '</tbody> </table>';
  document.getElementById('table').innerHTML = texto;
}

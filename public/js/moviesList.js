function qs(e) {
    document.querySelector(e)
}
const  $h1 = document.querySelector('h1');
const  $body = document.querySelector('body');

const darkMode = prompt('¿Desea modo oscuro?', 'si')

darkMode == 'si' ?($body.style.backgroundColor = '#7f7f7f', $body.classList.add('fondoMoviesList')) : null;

$h1.innerText = 'LISTADO DE PELICULA';

$h1.style.color = 'white';
$h1.style.backgroundColor = 'teal';
$h1.style.padding = '20px';
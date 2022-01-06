const  $main = document.querySelector('main');
const  $h2 = document.querySelector('h2');
const  $a = document.querySelector('a');
const  $p = document.querySelector('p');
const  $body = document.querySelector('body');


const namePrompt = prompt('Ingresá tu nombre');

namePrompt ? $h2.innerText = namePrompt : $h2.innerText = 'invitado';

$h2.style.textTransform = 'uppercase';

$a.style.color = '#E51B3E';

const wallPaper = confirm('¿Desea colocar un fondo de pantalla?');

wallPaper == true ? $body.classList.add('fondo'): null;

$p.map((parraf, i) => {parraf[i]%2 == 0 ? parraf.classList.add('destavadoPar') : parraf.classList.add('destavadoImpar')});

$main.style.display = 'block';
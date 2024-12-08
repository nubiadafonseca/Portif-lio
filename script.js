//Inicializando Parallax.js
var cenario = document.getElementById('cenario');
new Parallax(cenario);

var cenario2 = document.getElementById('cenario2');
new Parallax(cenario2);

document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const button = document.getElementById('toggle-theme');
  const cenario = document.getElementById('cenario');
  const cenario2 = document.getElementById('cenario2');

  // Estado inicial: modo escuro
  button.textContent = 'Modo Claro'; // Texto do botão
  cenario.style.display = 'block'; // Exibe o cenário escuro
  cenario2.style.display = 'none'; // Esconde o cenário claro

  // Alternar entre os modos ao clicar no botão
  button.addEventListener('click', () => {
    body.classList.toggle('escuro');
    body.classList.toggle('claro');

    if (body.classList.contains('escuro')) {
      button.textContent = 'Modo Claro';
      cenario.style.display = 'block';
      cenario2.style.display = 'none';
    } else {
      button.textContent = 'Modo Escuro';
      cenario.style.display = 'none';
      cenario2.style.display = 'block';
    }
  });
});

// Menu do celular: abre e fecha quando o botão é clicado.
const botaoMenu = document.getElementById('botao-menu');
const menuMobile = document.getElementById('menu-mobile');

botaoMenu.addEventListener('click', function () {
  const aberto = !menuMobile.classList.toggle('hidden');
  botaoMenu.setAttribute('aria-expanded', aberto);
});

menuMobile.addEventListener('click', function (evento) {
  if (evento.target.tagName === 'A') {
    menuMobile.classList.add('hidden');
    botaoMenu.setAttribute('aria-expanded', 'false');
  }
});

// Alterna apenas a classe dark do HTML.
document.getElementById('modo-escuro').addEventListener('click', function () {
  document.documentElement.classList.toggle('dark');
});

// O botão principal toca a música no player nativo do HTML.
document.getElementById('ouvir-agora').addEventListener('click', function () {
  document.getElementById('player').play();
});

// O formulário só mostra uma mensagem; não envia nem salva dados.
document.getElementById('formulario').addEventListener('submit', function (evento) {
  evento.preventDefault();
  document.getElementById('mensagem').textContent = 'Simulação concluída! Nenhum dado foi enviado ou guardado.';
  this.reset();
});

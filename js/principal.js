(function () {
  // Menú del móvil
  var boton = document.querySelector('.boton-menu');
  var menu = document.getElementById('menu');
  if (boton && menu) {
    var abrir = function (abierta) {
      menu.classList.toggle('abierta', abierta);
      boton.setAttribute('aria-expanded', abierta ? 'true' : 'false');
    };
    boton.addEventListener('click', function () { abrir(!menu.classList.contains('abierta')); });
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { abrir(false); });
    });
  }

  // Revelado suave al bajar (sin JS, todo se ve desde el principio)
  var bloques = document.querySelectorAll('.revelar, .revelar-foto');
  if ('IntersectionObserver' in window) {
    var observador = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          observador.unobserve(e.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    bloques.forEach(function (b) { observador.observe(b); });
  } else {
    bloques.forEach(function (b) { b.classList.add('visible'); });
  }

  // Año del pie siempre al día
  document.querySelectorAll('[data-anio]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();

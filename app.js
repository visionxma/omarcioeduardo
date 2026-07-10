const topbar = document.getElementById('topbar');
const name = document.querySelector('.name');

// A barra do topo entra assim que o nome sai da tela.
new IntersectionObserver(
  ([entry]) => topbar.classList.toggle('is-visible', !entry.isIntersecting),
  { rootMargin: '-8px 0px 0px 0px' }
).observe(name);

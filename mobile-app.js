/* mobile-app.js
   Injects the bottom tab bar on mobile screens only.
   Add <script src="mobile-app.js"></script> before </body>
*/

(function () {
  if (window.innerWidth > 768) return; // desktop — do nothing

  /* ── Build bottom nav ── */
  const nav = document.createElement('nav');
  nav.id = 'app-bottom-nav';
  nav.setAttribute('aria-label', 'Navigation principale');

  nav.innerHTML = `
    <a class="app-nav-item active" href="#home" data-section="home">
      <svg viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
      <span>Accueil</span>
    </a>
    <a class="app-nav-item" href="#menu" data-section="menu">
      <svg viewBox="0 0 24 24"><path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z"/></svg>
      <span>Menu</span>
    </a>
    <a class="app-nav-order" href="#reservation" aria-label="Commander">
      <svg viewBox="0 0 24 24"><path d="M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3zm0 10c-1.66 0-3-1.34-3-3h2c0 .55.45 1 1 1s1-.45 1-1h2c0 1.66-1.34 3-3 3z"/></svg>
    </a>
    <a class="app-nav-item" href="#gallery" data-section="gallery">
      <svg viewBox="0 0 24 24"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>
      <span>Galerie</span>
    </a>
    <a class="app-nav-item" href="#location" data-section="location">
      <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
      <span>Lieu</span>
    </a>
  `;

  document.body.appendChild(nav);

  /* ── Active state on scroll ── */
  const sections = ['home', 'menu', 'about', 'gallery', 'reservation', 'location'];
  const navItems = nav.querySelectorAll('.app-nav-item[data-section]');

  // Map section IDs to nav data-section values
  const sectionMap = {
    home: 'home',
    menu: 'menu',
    about: 'menu',       // group about under menu
    gallery: 'gallery',
    reservation: 'location', // group reservation under location
    location: 'location'
  };

  function setActive(sectionId) {
    const target = sectionMap[sectionId] || sectionId;
    navItems.forEach(item => {
      item.classList.toggle('active', item.dataset.section === target);
    });
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setActive(entry.target.id);
      }
    });
  }, { threshold: 0.35 });

  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });

  /* ── Smooth link clicks ── */
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  /* ── Inject mobile top header inside hero after load ── */
  window.addEventListener('load', () => {
    const heroContent = document.querySelector('.hero-content');
    if (!heroContent) return;
    // Inject greeting above h4
    const greeting = document.createElement('div');
    greeting.className = 'app-greeting';
    greeting.innerHTML = `
      <span style="
        display:inline-block;
        background:rgba(255,255,255,0.15);
        backdrop-filter:blur(8px);
        border:1px solid rgba(255,255,255,0.25);
        color:#fff;
        font-family:'Poppins',sans-serif;
        font-size:0.78rem;
        font-weight:500;
        padding:7px 16px;
        border-radius:30px;
        margin-bottom:14px;
        letter-spacing:0.5px;
      ">📍 Douala, Cameroun</span>
    `;
    heroContent.insertBefore(greeting, heroContent.firstChild);
  });

})();
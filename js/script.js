document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.header__hamburger');
  const closeBtn = document.querySelector('.header__close');
  const nav = document.querySelector('.header__nav');
  const navLinks = document.querySelectorAll('.header__nav-link');

  if (!hamburger || !nav || !closeBtn) {
    console.error('Menu elements not found');
    return;
  }

  function openMenu() {
    nav.classList.add('header__nav--active');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    nav.classList.remove('header__nav--active');
    document.body.style.overflow = '';
  }

  function toggleMenu() {
    const isOpen = nav.classList.contains('header__nav--active');

    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  closeBtn.addEventListener('click', closeMenu);

  navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // PORTFOLIO VIDEO SWITCHER
  const videoPlayer = document.getElementById('portfolio-video');
  const videoButtons = document.querySelectorAll('.portfolio__btn');

  const videoSources = {
    beauty: "assets/videos/beauty.mp4",
    comidinhas: "assets/videos/comidinhas.mp4",
    lifestyle: "assets/videos/lifestyle.mp4",
    nipo: "assets/videos/nipo.mp4"
  };

  if (videoPlayer && videoButtons.length > 0) {
    videoButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        // Remove active state
        videoButtons.forEach(b => b.classList.remove('is-active'));
        // Add active state to clicked
        btn.classList.add('is-active');

        // Change video source
        const niche = btn.getAttribute('data-video');
        const source = videoPlayer.querySelector('source');

        if (source && videoSources[niche]) {
          source.src = videoSources[niche];
          videoPlayer.load();
          videoPlayer.play();
        }
      });
    });
  }
  });
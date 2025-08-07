document.addEventListener('DOMContentLoaded', function() {
  const menuWrapper = document.querySelector('.menu-wrapper');
  const menuBtn = document.querySelector('.menu-btn');
  const menuOverlay = document.querySelector('.menu-overlay');

  function toggleMenu() {
    menuWrapper.classList.toggle('active');
  }

  menuBtn.addEventListener('click', toggleMenu);
  menuOverlay.addEventListener('click', toggleMenu);
});
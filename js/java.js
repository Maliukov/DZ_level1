let menuBtn = document.querySelector('.menu-btn');
let header__nav = document.querySelector('.header__nav');

menuBtn.addEventListener('click', function() {
  menuBtn.classList.toggle('active');
  header__nav.classList.toggle('active');
})
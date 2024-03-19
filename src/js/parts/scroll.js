const scrollToTopBtn = document.querySelector('.footer-scroll');

scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

const mobalBurger = document.querySelector('.header-mobal__bugreg');
const burger = document.querySelector('.bugreg');
const menu = document.querySelector('.bugreg-menu');
const catalogLink = document.querySelector('.bugreg-catalog a');
const subMenu = document.querySelector('.bugreg-menu .bugreg-menu');

function handleCloseMenu() {
  burger.classList.remove('active');
  menu.classList.remove('active');
  catalogLink.classList.remove('active');
  subMenu.classList.remove('active');
}

function handleBurgerClick() {
  burger.classList.toggle('active');
  menu.classList.toggle('active');
  catalogLink.classList.remove('active');
  if (subMenu.classList.toggle('active')) {
    subMenu.classList.toggle('active');
  }
}
burger.addEventListener('click', handleBurgerClick);

function handleCatalogLinkClick(e) {
  e.preventDefault();
  catalogLink.classList.toggle('active');
  subMenu.classList.toggle('active');
}
catalogLink.addEventListener('click', handleCatalogLinkClick);

function handleDocumentClick(e) {
  if (!mobalBurger.contains(e.target)) {
    handleCloseMenu();
  }
}
document.addEventListener('click', handleDocumentClick);


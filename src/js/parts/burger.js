const mobalBurger = document.querySelector('.header-mobal__bugreg');
const burger = document.querySelector('.bugreg');
const menu = document.querySelector('.bugreg-menu');
const catalog = document.querySelector('.bugreg-catalog');
const subMenu = document.querySelector('.bugreg-submenu');

function handleCloseMenu() {
  burger.classList.remove('active');
  menu.classList.remove('active');
  catalog.classList.remove('active');
  subMenu.classList.remove('active');
}

function handleBurgerClick() {
  burger.classList.toggle('active');
  menu.classList.toggle('active');
  if (subMenu.classList.toggle('active')) {
    subMenu.classList.toggle('active');
  }
}
burger.addEventListener('click', handleBurgerClick);

function handleCatalogClick(e) {
  e.preventDefault();
  subMenu.classList.toggle('active');
  catalog.classList.toggle('active');
}
catalog.addEventListener('click', handleCatalogClick);

function handleDocumentClick(e) {
  if (!mobalBurger.contains(e.target)) {
    handleCloseMenu();
  }
}
document.addEventListener('click', handleDocumentClick);

document.querySelectorAll('.bugreg-menu a, .bugreg-submenu a').forEach(link => {
  if (!link.classList.contains('bugreg-catalog')) {
    link.addEventListener('click', handleCloseMenu);
  }
});

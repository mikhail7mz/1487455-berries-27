/* в этот файл добавляет скрипты*/

const menuToggle = document.querySelector('.header__menu-toggle');
const menu = document.querySelector('.header__menu');

document.querySelector('.header--no-js').classList.remove('header--no-js');

menuToggle.addEventListener('click', (e) => {
  e.preventDefault();

  menuToggle.classList.toggle('header__menu-toggle--close');
  menu.classList.toggle('header__menu--opened');
});

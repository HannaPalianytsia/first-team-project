const modal = document.querySelector('.header_navigation_window');
const closeButton = document.querySelector('.burger_icon_close');
const burgerButton = document.querySelector('.button_burger');


if (!modal.classList.contains('to_close')) {
  modal.classList.add('to_close');
}

closeButton.addEventListener('click', function () {
  modal.classList.add('to_close');
});

burgerButton.addEventListener('click', function () {
  modal.classList.remove('to_close');
});

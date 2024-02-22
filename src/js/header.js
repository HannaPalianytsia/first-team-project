
const closeButton = document.querySelector('.burger_icon_close');
const modal = document.querySelector('.header_navigation_window');




closeButton.addEventListener('click', function () {
    modal.classList.add('to_close');
});

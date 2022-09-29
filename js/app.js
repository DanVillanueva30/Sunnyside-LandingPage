document.addEventListener('DOMContentLoaded', function() {
    eventListeners();
});

function eventListeners() {
    const menu = document.querySelector('.header__mobileMenu');

    menu.addEventListener('click', mobileMenu);

}

function mobileMenu() {
    const headerNavegacion = document.querySelector('.header__navegacion');

    if(headerNavegacion.classList.contains('mostrar')) {
        headerNavegacion.classList.remove('mostrar');
    } else {
        headerNavegacion.classList.add('mostrar');

    }
}

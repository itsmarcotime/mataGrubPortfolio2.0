window.addEventListener('load', function() {
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const menu = document.querySelector('#mobileMenu');
    const menuLinks = document.querySelector('.navMenu');

    menu.addEventListener('click', () => {
        menu.classList.toggle('isActive');
        menuLinks.classList.toggle('active');
    });
});
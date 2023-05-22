window.addEventListener('load', function() {
    // navbar stuff
    const menu = document.querySelector('#mobileMenu');
    const menuLinks = document.querySelector('.navMenu');

    menu.addEventListener('click', () => {
        menu.classList.toggle('isActive');
        menuLinks.classList.toggle('active');
    });

    // mataGrub logo
    const mataGrub = document.querySelectorAll('#mataGrub path');
    
    for (let i = 0; i < mataGrub.length; i++) {
        console.log(`Letter ${i} is ${mataGrub[i].getTotalLength()}`);
    }
});
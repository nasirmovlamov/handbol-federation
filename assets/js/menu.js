const menuBtn = document.querySelector('.menubtn');

const menu = document.querySelector('.menu');

menuBtn.addEventListener('click', () => {
    console.log(menu.classList)
    if(menu.classList.contains('menu-show')) {
        menu.classList.remove('menu-show');
        return 
    }
    menu.classList.add('menu-show');
})
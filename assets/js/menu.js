const menuBtn = document.querySelector('.menubtn');
const searchbtn = document.querySelector('.searchbtn');
const searchform = document.querySelector('.searchform');
const searchmenu = document.querySelector('.searchmenu');
const menu = document.querySelector('.menu');


const closeMenu = (menu , name) => {
    if(menu.classList.contains(`${name}-active`)) {
        menu.classList.remove(`${name}-active`);
    }
}


menuBtn.addEventListener('click', () => {
    closeMenu(searchmenu, 'search-menu');
    if(menu.classList.contains('menu-active')) {
        menu.classList.remove('menu-active');
        return 
    }
    menu.classList.add('menu-active');
})


searchbtn.addEventListener('click', function() {
    if(window.innerWidth < 1280) {
        closeMenu(menu, 'menu');
        if(searchmenu.classList.contains('search-menu-active')) {
            searchmenu.classList.remove('search-menu-active');
            return
        }
        searchmenu.classList.add('search-menu-active');
        return
    }

    if(searchform.classList.contains('search-form-active')) {
        searchform.classList.remove('search-form-active');
        return
    }
    searchform.classList.add('search-form-active');
});


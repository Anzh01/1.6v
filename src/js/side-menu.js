const sideMenu = document.querySelector('aside.side-menu');
const sideButton = document.querySelector('.side-form__button');
const menu = document.querySelector('.side-menu');
const menuButton = document.querySelector('.header__icons_menu');
const container = document.querySelector('.container')

menuButton.addEventListener('click', function () {
    menu.classList.toggle('hidden');
    container.classList.add('side-shadow');
})

sideButton.addEventListener('click', function () {
    sideMenu.classList.add('hidden');
    container.classList.remove('side-shadow');
})

function watchWindow () {
    if (window.innerWidth >= 1440) {
        sideMenu.classList.remove('hidden');
        sideButton.classList.add('hidden')
    } else {
        sideMenu.classList.add('hidden');
        sideButton.classList.remove('hidden')
    }
}

window.addEventListener('resize', watchWindow)



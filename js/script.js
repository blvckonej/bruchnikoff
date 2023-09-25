document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('burger').addEventListener('click', function () {
        document.querySelector('.header__wrapper').classList.toggle('open');
    })
})

window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.querySelector('.header__wrapper').classList.remove('open');
    }
})

document.getElementById('menu').addEventListener('click', event => {
    event._isClickWithInMenu = true;
})

document.getElementById('burger').addEventListener('click', event => {
    event._isClickWithInMenu = true;
})

document.body.addEventListener('click', event => {
    if (event._isClickWithInMenu) return;
    document.querySelector('.header__wrapper').classList.remove('open')
})
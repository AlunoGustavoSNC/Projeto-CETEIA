const navbar = document.querySelector('#nav-bar')
const menu = document.querySelector('.menu')

menu.addEventListener('click', () => {
    navbar.classList.toggle('is-active')
})

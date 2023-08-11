




const burgerMenu = document.querySelector('.burger-menu');
const headerTxt = document.querySelector('.header-txt');

burgerMenu.addEventListener('click', () => {
    headerTxt.classList.toggle('active');
});
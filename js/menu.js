const menuDisplayer = document.querySelector('#menuDisplayer');
const menuCloser = document.querySelector('#menuCloser');
const menu = document.querySelector('#menu');

menuDisplayer.addEventListener('click',displayMenu)
menuCloser.addEventListener('click',closeMenu)

function displayMenu(){
    menu.style.display = 'block'
    menu.classList.add('zindex')
    menuDisplayer.style.display = 'none'
}

function closeMenu(){
    menu.style.display = 'none'
    menuDisplayer.style.display = 'flex';
}
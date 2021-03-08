const header = document.querySelector('.header');
const toggle = document.querySelector('#toggle');
const boxmenu = document.querySelector('.header__boxmenu');
const hamburg = document.querySelector('.hamburger');
const body = document.querySelector('body');
const html = document.querySelector('html');

toggle.addEventListener('click', function () { //hamburg clickkedkdid
    console.log('You clicked me!');
    if (hamburg.classList.contains('open')) {
        //close
        hamburg.classList.remove('open');
        html.classList.remove('noscroll');
        boxmenu.classList.add('hidden');
        boxmenu.classList.remove('fade-in');
        boxmenu.classList.add('fade-out');


    } else { //open
        hamburg.classList.add('open');
        html.classList.add('noscroll');
        boxmenu.classList.remove('hidden');
        boxmenu.classList.remove('fade-out');
        boxmenu.classList.add('fade-in');
    }
});
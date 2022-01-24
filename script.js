const hamburger = document.querySelector('.menu-btn__burger')
let hamburger = false;
menuBtn.addEventListener('click', () =>{
    if(!hamburger){
        menuBtn.classList.add('open');

        hamburger = true;
    } else {
        menuBtn.classList.remove('open');

        hamburger = false;
    }
});



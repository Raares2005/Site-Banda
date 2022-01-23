const menuBtn = document.querySelector('.menu-btn')
let menuOpen = false;
menuBtn.addEventListener('click', () =>{
    if(!menuOpen){
        menuBtn.classList.add('open');
        $( ".burger" ).show();
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        $( ".burger" ).hide();
        menuOpen = false;
    }
});
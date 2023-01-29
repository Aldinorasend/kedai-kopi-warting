// Toogle class active
const navbarNav = document.querySelector
('.navbar-nav');
// ketika hamburger di klik 
document.querySelector('#sidebar').
onclick = () => {
    navbarNav.classList.toggle('active');
};

// klik diluar sidebar untuk hide navbar nav
const hamburger = document.querySelector
('#sidebar');


document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active')
    }
});

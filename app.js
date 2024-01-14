const navToggler = document.querySelector('.navbar-toggler *');
const toggleIcon = document.querySelector('.toggleIcon')
const navbarNavDropdown = document.querySelector('#navbarNavDropdown')



navToggler.addEventListener('click', () => {
    navbarNavDropdown.classList.toggle('active')
    if (toggleIcon.innerHTML == '<img src="assets/images/icon-menu.svg" alt="">') {
        toggleIcon.innerHTML='<img src="assets/images/icon-menu-close.svg" style="width: 75%;" alt="">'
    } else {
        toggleIcon.innerHTML='<img src="assets/images/icon-menu.svg" alt="">'
    }
    console.log("Working: " + toggleIcon.innerHTMLHTML );
})
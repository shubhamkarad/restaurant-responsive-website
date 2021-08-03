let menu = document.querySelector('#menu-bars');
let nav = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    nav.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    nav.classList.remove('active');
}
document.querySelector('#search').onclick = () => {
    console.log("clicked")
    document.querySelector('#search-form').classList.toggle('active');
}
document.querySelector('#close').onclick = () => {
    console.log("clicked")
    document.querySelector('#search-form').classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    loop: true,
});
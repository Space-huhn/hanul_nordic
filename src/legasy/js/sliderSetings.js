const swiper = new Swiper(".swiper", {
    loop: false,
    speed: 1000,
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 2000,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: false,
        clickable: true,
    },
    keyboard: true,
    mousewheel: true,
});


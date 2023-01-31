let swiper = new Swiper(".mySwiperSmall", {
    spaceBetween: 1,
    centeredSlides: true,
    slidesPerView: 1,
    loop: true,
    autoplay: false,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    lazy: {
        loadPrevNext: true,
    },
});

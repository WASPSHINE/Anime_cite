const swiper = () => {
    const swiper = new Swiper('.swiper', {
        // -----pagination------//
        pagination: {
            el: '.swiper-pagination',
        },
        //----Navigation arrows---------//
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        effect: "fade",
        speed: 1000
    })
}

swiper();

//----------------Swiper-------------------//
// const swiper = new Swiper('.swiper', {
//     //-----pagination------//
//     pagination: {
//         el: '.swiper-pagination',
//     },
//     //----Navigation arrows---------//
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
//     effect: "fade",
//     speed: 1000
// })

// ------------Инкапсуляция Slider--------------//


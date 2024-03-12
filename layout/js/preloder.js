//--------------Инкапсуляция slider----------------------------//
const preloader = () => {
    const preloader = document.querySelector('.preloder')
    const swiper = 1
    preloader.classList.add('active')

    setTimeout(function () {
        preloader.classList.remove('active')
    }, 500)
}
preloader();


// const preloder = document.querySelector('.preloder');
// const swiper = 1
// preloder.classList.add('active');
// //первый пример записи.
// // setTimeout(function () {
// //     preloder.classList.remove('active')
// // },500)
// // второй пример записи через стрелочную функцию
// setTimeout () => {
//     preloder.classList.remove('active')
// },500);




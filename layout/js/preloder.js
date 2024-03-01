const preloder = document.querySelector('.preloder');

preloder.classList.add('active');

//первый пример записи.
// setTimeout(function () {
//     preloder.classList.remove('active')
// },500)

// второй пример записи через стрелочную функцию
setTimeout () => {
    preloder.classList.remove('active')
},500);



// ------- Открытие закрытие модального окна поиска --------------//
const modal = document.querySelector('.search-model')
const modalBtn = document.querySelector('.icon_search')
const modalClose = modal.querySelector('.search-close-switch')
console.log(modalClose);

modalBtn.addEventListener('click', () => {
    modal.style.display = 'block'

})

modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
})

// Решение усложненного задания
// - Повесить обработчик события на поле ввода в модальном окне Поиска//

const input = document.querySelector('[placeholder="Search here....."]');
input.addEventListener('input', function_name);

//---- Выведение значение из поля данных в консоль -------//
function  function_name(event) {
    console.log('input', event.target.value);
}


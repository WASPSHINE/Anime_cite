// ------------Открытие закрытие модального окна поиска --------------//

const modal = () => {
const modal = document.querySelector('.search-model')
const modalBtn = document.querySelector('.icon_search')
const modalClose = modal.querySelector('.search-close-switch')

modalBtn.addEventListener('click', () => {
    modal.style.display = 'block';
})

modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
})
}

const input = () => {
const input = document.querySelector('[placeholder="Search here....."]');
input.addEventListener('input', function_name);

function  function_name(event) {
    console.log('input', event.target.value);
}
}

modal();
input();

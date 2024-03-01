const elements = document.querySelectorAll('.set-bg')

console.log(elements);
//пишем цикл
for (let i = 0; i < elements.length; i++) {
    // console.dir(elements[i]);
    const src = elements[i].dataset.setbg

    //первый пример
    // elements[i].style.backgroundImage = 'url(' + src + ')'
    elements[i].style.backgroundImage = `url(${src})`
}
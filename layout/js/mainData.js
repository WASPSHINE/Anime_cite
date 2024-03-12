const mainData = () => {

const renderAnimeList = (array, ganres) => {
    console.log(array);
    console.log(ganres);
}


    const renderTopAnime = (array) => {
        const wrapper = document.querySelector('.filter__gallery')

        wrapper.innerHTML = ''

        array.forEach((item) => {
            // console.log(item)
            wrapper.insertAdjacentHTML('afterbegin', `<div class="product__sidebar__view__item set-bg mix "\n' + data-setbg="${item.image}">\n' +
                '                                    <div class="ep">${item.rating} / 10</div>\n' +
                '                                    <div class="view"><i class="fa fa-eye"></i>${item.views}</div>\n' +
                '                                    <h5><a href="/anime-details.html">${item.title}</a></h5>\n' +
                '                                </div>\)
                `)
        })

        wrapper.querySelectorAll('.set-bg').forEach((elem) => {
            elem.style.backgroundImage = `url(${elem.dataset.setbg})`
        })
    }

    fetch('./baseData.json')
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            const ganres = new Set()

            renderTopAnime(data.anime.sort((a, b) =>  b.views - a.views).slice(0, 5));
            data.anime.forEach((item) => {
                ganres.add(item.ganre)
            })
            renderAnimeList(data.anime, ganres)
        })
}

mainData()
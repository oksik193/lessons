/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]

};

let ads = document.querySelectorAll('.promo__adv');
ads[0].remove();

let genre = document.querySelector('.promo__genre');
genre.textContent = 'Драма';

let bg = document.querySelector('.promo__bg');
bg.style.cssText += 'background-image: url(img/bg.jpg);';

function compareNmbr(a, b){
    return (a-b);
}
movieDB.movies.sort(compareNmbr);

let promoInteractive = document.querySelector('.promo__interactive');
let promoInteractiveTitle = promoInteractive.querySelector('.promo__interactive-title');
let listOfFilms = document.querySelector('.promo__interactive-list');
listOfFilms.remove();

let newListOfFilms = document.createElement('ol');
newListOfFilms.classList.add('.promo__interactive-list');

movieDB.movies.forEach(element => {
   newListOfFilms.innerHTML += `<li>${element}</li>`; 
});

promoInteractiveTitle.after(newListOfFilms);





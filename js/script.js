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

let ads = document.querySelectorAll('.promo__adv img'),
    bg = document.querySelector('.promo__bg'),
    genre = bg.querySelector('.promo__genre');


ads.forEach(element => {
    element.remove();
});
genre.textContent = 'Драма';
bg.style.cssText += 'background-image: url(img/bg.jpg);';

movieDB.movies.sort();

let listOfFilms = document.querySelector('.promo__interactive-list');
listOfFilms.innerHTML = '';

movieDB.movies.forEach((element, i) => {
    listOfFilms.innerHTML += `
    <li class="promo__interactive-item">${i+1}. ${element}</li>
    `; 
 });





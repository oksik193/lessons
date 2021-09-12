'use strict';

document.addEventListener('DOMContentLoaded', () => {
    
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ],
    
        updateMovieList: function(){
            movieDB.movies.sort();
            filmsTrash = [];
            let listOfFilms = document.querySelector('.promo__interactive-list');
            listOfFilms.innerHTML = '';
        
            movieDB.movies.forEach((element, i) => {
                listOfFilms.innerHTML += `
                <li class="promo__interactive-item">${i+1}. ${element}
                <div class="delete"></div></li>
                `; 
            });

            filmsTrash = document.querySelectorAll('.delete');
            filmsTrash.forEach(element => {
                element.addEventListener('click', function(e){
                    e.preventDefault();
                    let i = +element.parentElement.textContent.slice(0,1);
                    movieDB.movies.splice(i-1, 1);
                    element.parentElement.remove();
                    movieDB.updateMovieList();
                });
            });
        }
    };
    
    let ads = document.querySelectorAll('.promo__adv img'),
        bg = document.querySelector('.promo__bg'),
        genre = bg.querySelector('.promo__genre'),
        newFilmBtn = document.querySelector('button'),
        filmsTrash = document.querySelectorAll('.delete');
    
    ads.forEach(element => {
        element.remove();
    });
    genre.textContent = 'Драма';
    bg.style.cssText += 'background-image: url(img/bg.jpg);';
    
    movieDB.updateMovieList();
    
    newFilmBtn.addEventListener('click', function(e){
        e.preventDefault();
        const checkBox = document.querySelector('.yes').previousElementSibling;
        const addingText = document.querySelector('.adding__input').value;
        
        if(checkBox.checked){
            console.log('Добавляем любимый фильм');
        }
    
        if(addingText.length < 21){
            movieDB.movies.push(addingText);
            movieDB.updateMovieList();
        } else if (addingText.length > 21) {
            movieDB.movies.push(`${addingText.slice(0, 21)}...`);
            movieDB.updateMovieList();
        } else if (addingText.length == 0){
            console.log('err');
        } else {
            console.log('err');
        }
    });


});




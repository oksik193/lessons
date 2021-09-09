"use strict"; //отключение всего устаревшего

let numberOfFilms;

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false,

    detectPersonalLevel: function (){
        if(this.count < 10){
            console.log('Просмотрено довольно мало фильмов', '');
        } else if(this.count >= 10 && this.count < 30){
            console.log('Вы классический зритель', '');
        } else if(this.count >= 30){
            console.log('Вы киноман', '');
        } else {
            console.log('error');
        }
    },

    showMyDB: function () {
        if (!this.private){
            console.log(this);
        }
    },

    writeYourGenres: function(){
        for(let i = 1; i <= 3; i++){
            const genre = prompt(`Ваш любимый жанр под номером ${i}`);
            if(genre != null && genre != ''){
            personalMovieDB.genres[i-1] = genre;
            } else {
                i--;
            }
            if(i == 3) {
                this.genres.forEach(function(element, i, arr) {
                    console.log(`Любимы жанр под номером ${i+1} это ${element}`);
                });
            }
        }
    },

    rememberMyFilms: function() {
        for(let i = 0; i < numberOfFilms; i++){
            const a = prompt('Один из последних просмотренных фильмов?', ''),
                  b = +prompt('На сколько оцените его?', '');
            
            if(a != null && b != null && a != '' && b != '' && a.length < 50){
                personalMovieDB.movies[a] = b;
                console.log('Done');
            } else {
                console.log('error');
                i--;
            }
        }
    },

    start: function() {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');
        while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
            numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');
        }
        this.count = numberOfFilms;
    },

    toggleVisibleMyDB: function(){
        if(this.private == true){
            this.private = false;
            console.log(`private now false`);
        } else if (this.private == false) {
            this.private = true;
            console.log(`private now true`);
        } else {
            console.log('error');
        }
    },
};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.writeYourGenres();
personalMovieDB.detectPersonalLevel();
personalMovieDB.toggleVisibleMyDB();

console.log(personalMovieDB);
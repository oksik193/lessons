"use strict"; //отключение всего устаревшего

let numberOfFilms;
// first
while (numberOfFilms == 0 || numberOfFilms == undefined) {    
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");
}

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};
/*
const firstMovie = prompt("Один из просмотренных фильмов?");
personalMovieDB.movies[firstMovie] = +prompt("На сколько оцените его?");
const secondMovie = prompt("Один из просмотренных фильмов?");
personalMovieDB.movies[secondMovie] = +prompt("На сколько оцените его?");

console.log(personalMovieDB);
*/
//second

for(let i = 0; i < 2; i++) {
    const movieName = prompt("Один из просмотренных фильмов?");
    personalMovieDB.movies[movieName] = +prompt("На сколько оцените его?");
}

console.log(personalMovieDB);

if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман');
} else {
    console.log('error');
}
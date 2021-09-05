"use strict"; //отключение всего устаревшего

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const firstMovie = prompt("Один из просмотренных фильмов?");
personalMovieDB.movies[firstMovie] = +prompt("На сколько оцените его?");
const secondMovie = prompt("Один из просмотренных фильмов?");
personalMovieDB.movies[secondMovie] = +prompt("На сколько оцените его?");

console.log(personalMovieDB);


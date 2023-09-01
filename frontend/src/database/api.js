import { cinema } from "./db";

const BASE_URL = cinema;

function takePlay(name, type) {
    let promise = 'já vai'
    console.log(BASE_URL[type])
    for (let i = 0; i < BASE_URL[type].length; i++) {
        if (BASE_URL.movies[i].name === name) promise = BASE_URL.movies[i]
    }
    /*  BASE_URL.movies[0][type].forEach(element => {
        // if (element.name === name) return element
        console.log(element)
    }); */
    console.log(promise)
    return promise; 
}

function takeAllMovie() {
    const promise = cinema.movies;

    return promise;
}

export {
    takePlay,
    takeAllMovie,
}
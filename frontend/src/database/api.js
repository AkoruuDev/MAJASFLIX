import { cinema } from "./db";

const BASE_URL = cinema;

function takePlay(name, type) {
    let promise = 'já vai'
    console.log(BASE_URL)
    for (let i = 0; i < BASE_URL.length; i++) {
        if (BASE_URL[i].name === name) promise = BASE_URL[i]
    }
    /*  BASE_URL.movies[0][type].forEach(element => {
        // if (element.name === name) return element
        console.log(element)
    }); */
    console.log("A promise é " + promise)
    return promise; 
}

function takeAllMovie() {
    const promise = cinema;

    return promise;
}

export {
    takePlay,
    takeAllMovie,
}
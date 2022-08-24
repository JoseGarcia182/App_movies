let movies = require("./movies");

const moviesDH = {
    movies: movies,

    listMovies: function(){
        console.log("Lista de peliculas disponibles:");
        console.log("========================");
        movies.forEach(function(e,i){console.log((i+1) + "- " + e.title);})
    },

    searchMovie: function (movie) {
        const movieFound = movies.filter(m => m.id == movie || m.title == movie)[0];
        return movieFound || null;
    },

    searchMovieByGenre: function(genero){
        const movieGenre = movies.filter(elemento => elemento.genre == genero);
        if(movieGenre.length != 0){
        console.log("Peliculas del Genero: " + genero);
        console.log("_______________________________________")
        movieGenre.forEach(function(e,i){console.log((i+1) + "- " + e.title);})
        }else{return null}},

    totalPrice: function(){
        const totalPrice = movies.reduce((sumat, movies) => sumat += movies.price, 0);
        console.log("El precio de las peliculas es de : $" + totalPrice);},

    changeMovieGenre: function(id, newGenre){
        const peliculaEncontrada = this.searchMovie(id);
        peliculaEncontrada.genre = newGenre;
    return "El genero de " + peliculaEncontrada.title + " fue cambiado por: " + newGenre}
    }


console.log(moviesDH.listMovies());
console.log("==============================");
console.log(moviesDH.searchMovie("Tiburon"));
console.log("==============================");
console.log(moviesDH.searchMovieByGenre("Ciencia Ficción"));
console.log("==============================");
console.log(moviesDH.totalPrice());
console.log("==============================");
console.log(moviesDH.changeMovieGenre(5553, "Ciencia Ficción"));
console.log(moviesDH.searchMovie("Wall-e"));

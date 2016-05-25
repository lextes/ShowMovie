/**
 * aqui vamos a colocar todas las funciones que afectan al funcionamiento global de la aplicacion
 * no hacemos nada de bajo nivel, solamente son wrappers hacia otras funciones
 */

/**
 * lee la base de datos de peliculas y la devuelve como un arreglo
 */
var readMovies = function(){
    return loadAllStg();
};


/**
 * lee la base de datos de generos y la devuelve como un arreglo
 */
var readGenres = function (){
    return genres;
};


/**
 * guarda una movie
 * @param movie el objeto movie
 */
var saveMovie = function(movie){
    return saveLocalStg(movie);
};

/**
 * carga una movie pasando su id
 * @param id el identificador de la movie
 */
var loadMovie = function(id){
    return loadLocalStg(id);
};

/**
 * elimina una movie de la base de datos
 * @param id el identificador de la movie
 */
var removeMovie = function(id){
    return removeLocalStg(id);
};
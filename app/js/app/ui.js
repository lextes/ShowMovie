/**
 * aqui vamos a colocar todas las funciones que tienen que ver con asuntos visuales
 */


/**
 * agrega opciones a un elemento html
 * @param d el elemento html
 * @param data un arreglo de valores los cuales asignaremos al elemento html
 */
var addOptions = function (d, data){
    for(var i=0; i<data.length; i++){
        var opt = document.createElement('option');
        opt.text = data[i];
        d.add(opt);
    }
};


var     dropdown = document.getElementById('dropdown'),
	    selectedGenre = document.getElementById('selectedGenre');

/**
 * llenamos el dropdown con los generos que tenemos en nuestra base de datos
 */
addOptions(dropdown,readGenres());

/**
 * atrapamos el evento de cambio de valor del dropdown para hacer alguna accion
 */
dropdown.onchange=function(){
	selectedGenre.innerHTML = this.value;
};

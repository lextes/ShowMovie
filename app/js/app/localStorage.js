
var lsPreffix = "sm-";

/**
* devuelve una llave colocando como prefijo sm-
*/
var createKey = function(id){
	return "sm-" + id;
}

/**
* genera un id unico, basado en el reloj de la computadora
*/
var createId = function(){
	var now = new Date();
	return now.getFullYear().toString() + (now.getMonth() + 1).toString() + now.getDate().toString() + now.getHours().toString() + now.getMinutes().toString() + now.getSeconds().toString() + now.getMilliseconds().toString();
}

/**
* devuelve todas las llaves del local storage que comienzen con un prefijo
*/
var allKeys = function(){
	var res = [],
		keys = Object.keys(localStorage);
	for(var i=0; i<keys.length; i++){
		var key = keys[i];
		if(key.indexOf(lsPreffix) == 0) {
			res.push(key);
		}
	}
	return res;
}

var loadLocalStg = function(id){
	var data = localStorage.getItem(id);
	if(data == null){		
		throw("cannot find any item with id:" + id);
	}
	return JSON.parse(data);
}

var saveLocalStg = function(data){
	if(!data){
		throw("missing data");
	} else if (!data.id){
		//si no tenemos un id, hay que asignarlo para poder diferenciar de cualquier otro objeto
		data.id = createId();
	}

	var json = JSON.stringify(data);
	localStorage.setItem(createKey(data.id), json);
}

var moveMovies = function(){
	for(var i = 0; i < movies.length; i++){
		saveLocalStg(movies[i]);
	}
}

function readGenres(){

	var genres=["Terror", "Comedia", "Infantil", "Drama"];

	return genres
}


function addOptions(d, data){
    for(var i=0; i<data.length; i++){
        var opt = document.createElement('option');
        opt.text = data[i];
        d.add(opt);
    }
}

var dropdown = document.getElementById('dropdown');
	selectedGenre = document.getElementById('selectedGenre');
  


addOptions(dropdown, readGenres());

dropdown.onchange=function(){
	selectedGenre.innerHTML = this.value;
}


function getQuery(url){
		url = url.replace("?", "");
	var propiedades=url.split("&");

	var propiedad1=propiedades[0].split("=");
	var propiedad2=propiedades[1].split("=");
	
	propiedadFinal1=propiedad1[1];
	propiedadFinal2=propiedad2[1];

	return propiedadFinal1
	return propiedadFinal2
}


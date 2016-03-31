
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

function getQuery(Query){
	var url = "?genre=Drama&id=3";
	var res= str.replace("?genre=Drama&id=3", "genre=Drama&id=3");
	document.getElementById("url").innerHTML = res;
	var propiedades=url.split("&");
}


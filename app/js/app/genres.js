
function readGenres(){

	var genres=["Comedy", "horror", "Drama", "Fantasy"];

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


addOptions(dropdown,readGenres());

dropdown.onchange=function(){
	selectedGenre.innerHTML = this.value;
}
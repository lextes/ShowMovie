
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


function getQuery(q){
    q = q.replace('?', '');

    var values = q.split('&'),
        result = {};
    for(var i=0; i<values.length; i++){
        var fields = values[i].split('=');
        if(fields.length == 0){
            continue;
        }
        var value = null;
        if(fields.length == 2){
            value = fields[1];
        }
        result[fields[0]] = value;
    }
    return result;
}
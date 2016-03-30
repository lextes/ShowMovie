
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

addOptions(dropdown, readGenres());

dropdown.onchange=function(){
   console.log(dropdown);   

}

 function mayores (numeros){
   var m = -1;
   for(var i=0; i < numeros.length; i++){
     if (numeros[i] > m){
       m = numeros[i];
     }
   }
   return m;
 }
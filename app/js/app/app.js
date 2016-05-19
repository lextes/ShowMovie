
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

if(location.search){
	var queryObject = getQuery(location.search);
	if(queryObject.genre){
		dropdown.value = queryObject.genre;
		selectedGenre.innerHTML = queryObject.genre;
	}
}

ar db = [
           {
               url:"http://www.imdb.com/title/tt1431045/",
               imageUrl:"http://ia.media-imdb.com/images/M/MV5BMjQyODg5Njc4N15BMl5BanBnXkFtZTgwMzExMjE3NzE@._V1_UY98_CR0,0,67,98_AL_.jpg",
               title:"Deadpool",
               year:2016,
               summary:"A former Special Forces operative turned mercenary is subjected to a rogue experiment that leaves him with accelerated healing powers, adopting the alter ego Deadpool",
               genre:"Comedy"
           }
            {
               url:"http://www.imdb.com/title/tt2948356/",
               imageUrl:"http://ia.media-imdb.com/images/M/MV5BOTMyMjEyNzIzMV5BMl5BanBnXkFtZTgwNzIyNjU0NzE@._V1_UX182_CR0,0,182,268_AL_.jpg",
               title:"Zootopia",
               year:2016,
               summary:"In a city of anthropomorphic animals, a rookie bunny cop and a cynical con artist fox must work together to uncover a conspiracy.",
               genre:"Comedy"
           }
           {
               url:"http://www.imdb.com/title/tt0993846/",
               imageUrl:"http://ia.media-imdb.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_UX182_CR0,0,182,268_AL_.jpg",
               title:"The Wolf of Wall Street",
               year:2013,
               summary:"Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.",
               genre:"Comedy"
           }
           {
               url:"http://www.imdb.com/title/tt2096673/",
               imageUrl:"http://ia.media-imdb.com/images/M/MV5BOTgxMDQwMDk0OF5BMl5BanBnXkFtZTgwNjU5OTg2NDE@._V1_UX182_CR0,0,182,268_AL_.jpg",
               title:"Inside Out",
               year:2015,
               summary:"After young Riley is uprooted from her Midwest life and moved to San Francisco, her emotions - Joy, Fear, Anger, Disgust and Sadness - conflict on how best to navigate a new city, house, and school.",
               genre:"Comedy"
           }
             {
               url:"http://www.imdb.com/title/tt0093779/",
               imageUrl:"http://ia.media-imdb.com/images/M/MV5BMTkzMDgyNjQwM15BMl5BanBnXkFtZTgwNTg2Mjc1MDE@._V1_UX182_CR0,0,182,268_AL_.jpg",
               title:"The Princess BrideThe",
               year:1987,
               summary:"While home sick in bed, a young boy's grandfather reads him a story called The Princess Bride.",
               genre:"Comedy"
           }
       ];
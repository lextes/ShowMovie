
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

var movies = [
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
           {
               url:"http://www.imdb.com/title/tt0078748/",
               imageUrl:"http://ia.media-imdb.com/images/M/MV5BMTU1ODQ4NjQyOV5BMl5BanBnXkFtZTgwOTQ3NDU2MTE@._V1_UX182_CR0,0,182,268_AL_.jpg",
               title:"Alien",
               year:1979,
               summary:"After a space merchant vessel perceives an unknown transmission as distress call, their landing on the source planet finds one of the crew attacked by a mysterious lifeform. Continuing their journey back to Earth with the attacked crew having recovered and the critter deceased, they soon realize that its life cycle has merely begun.",
               genre:"horror"
           }
           {
               url:"http://www.imdb.com/title/tt0081505/",
               imageUrl:"http://ia.media-imdb.com/images/M/MV5BODMxMjE3NTA4Ml5BMl5BanBnXkFtZTgwNDc0NTIxMDE@._V1_UY268_CR0,0,182,268_AL_.jpg",
               title:"The shining",
               year:1980,
               summary:"A family heads to an isolated hotel for the winter where an evil and spiritual presence influences the father into violence, while his psychic son sees horrific forebodings from the past and of the future.",
               genre:"horror"
           }
           {
               url:"http://www.imdb.com/title/tt0054215/",
               imageUrl:"http://ia.media-imdb.com/images/M/MV5BMTgzMzM3NDY0NF5BMl5BanBnXkFtZTgwNDgwNDgwNzE@._V1_UX182_CR0,0,182,268_AL_.jpg",
               title:"Psycho",
               year:1960,
               summary:"A Phoenix secretary steals $40,000 from her employer's client, goes on the run and checks into a remote motel run by a young man under the domination of his mother.",
               genre:"horror"
           }
           {
               url:"http://www.imdb.com/title/tt0090605/",
               imageUrl:"http://ia.media-imdb.com/images/M/MV5BMTYzNzU5MzQ4OV5BMl5BanBnXkFtZTcwMDcxNDg3OA@@._V1_UY268_CR9,0,182,268_AL_.jpg",
               title:"Psycho",
               year:1986,
               summary:"The planet from Alien (1979) has been colonized, but contact is lost. This time, the rescue team has impressive firepower, but will it be enough?",
               genre:"horror"
           }
            {
               url:"http://www.imdb.com/title/tt0073195/",
               imageUrl:"http://ia.media-imdb.com/images/M/MV5BNDcxODkyMjY4MF5BMl5BanBnXkFtZTgwOTk5NTc5MDE@._V1_UX182_CR0,0,182,268_AL_.jpg",
               title:"Jaws",
               year:1975,
               summary:"When a gigantic great white shark begins to menace the small island community of Amity, a police chief, a marine scientist and a grizzled fisherman set out to stop it.",
               genre:"horror"
           }
           {
               url:"http://www.imdb.com/title/tt1663202/",
               imageUrl:"http://ia.media-imdb.com/images/M/MV5BMjU4NDExNDM1NF5BMl5BanBnXkFtZTgwMDIyMTgxNzE@._V1_UX182_CR0,0,182,268_AL_.jpg",
               title:"The Revenant",
               year:2015,
               summary:"A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team.",
               genre:"Drama"
           }
           {
               url:"http://www.imdb.com/title/tt3170832/",
               imageUrl:"http://ia.media-imdb.com/images/M/MV5BMjE4NzgzNzEwMl5BMl5BanBnXkFtZTgwMTMzMDE0NjE@._V1_UX182_CR0,0,182,268_AL_.jpg",
               title:"La habitacion",
               year:2015,
               summary:"A young boy is raised within the confines of a small shed.",
               genre:"Drama"
           }
           {
               url:"http://www.imdb.com/title/tt3659388/",
               imageUrl:"http://ia.media-imdb.com/images/M/MV5BMTc2MTQ3MDA1Nl5BMl5BanBnXkFtZTgwODA3OTI4NjE@._V1_UX182_CR0,0,182,268_AL_.jpg",
               title:"The martian",
               year:2015,
               summary:"An astronaut becomes stranded on Mars after his team assume him dead, and must rely on his ingenuity to find a way to signal to Earth that he is alive.",
               genre:"Drama"
           }
           {
               url:"http://www.imdb.com/title/tt0068646/",
               imageUrl:"http://ia.media-imdb.com/images/M/MV5BMjEyMjcyNDI4MF5BMl5BanBnXkFtZTcwMDA5Mzg3OA@@._V1_UX182_CR0,0,182,268_AL_.jpg",
               title:"The Godfather",
               year:1972,
               summary:"The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
               genre:"Drama"
           }
           {
               url:"http://www.imdb.com/title/tt1895587/",
               imageUrl:"http://ia.media-imdb.com/images/M/MV5BMjIyOTM5OTIzNV5BMl5BanBnXkFtZTgwMDkzODE2NjE@._V1_UX182_CR0,0,182,268_AL_.jpg",
               title:"Spotlight",
               year:2015,
               summary:"The true story of how the Boston Globe uncovered the massive scandal of child molestation and cover-up within the local Catholic Archdiocese, shaking the entire Catholic Church to its core.",
               genre:"Drama"
           }
           {
               url:"http://www.imdb.com/title/tt2488496/",
               imageUrl:"http://ia.media-imdb.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_UX182_CR0,0,182,268_AL_.jpg",
               title:"Star Wars: Episode VII - The Force Awakens",
               year: 2015,
               summary:"Three decades after the defeat of the Galactic Empire, a new threat arises. The First Order attempts to rule the galaxy and only a ragtag group of heroes can stop them, along with the help of the Resistance.",
               genre:"fantasy"
           }
            {
               url:"http://www.imdb.com/title/tt2096673/",
               imageUrl:"http://ia.media-imdb.com/images/M/MV5BOTgxMDQwMDk0OF5BMl5BanBnXkFtZTgwNjU5OTg2NDE@._V1_UX182_CR0,0,182,268_AL_.jpg",
               title:"Inside Out",
               year: 2015,
               summary:"After young Riley is uprooted from her Midwest life and moved to San Francisco, her emotions - Joy, Fear, Anger, Disgust and Sadness - conflict on how best to navigate a new city, house, and school.",
               genre:"fantasy"
           }
           {
               url:"http://www.imdb.com/title/tt0093779/",
               imageUrl:"http://ia.media-imdb.com/images/M/MV5BMTkzMDgyNjQwM15BMl5BanBnXkFtZTgwNTg2Mjc1MDE@._V1_UX182_CR0,0,182,268_AL_.jpg",
               title:"The Princess Bride",
               year: 1987,
               summary:"While home sick in bed, a young boy's grandfather reads him a story called The Princess Bride.",
               genre:"fantasy"
           }
            {
               url:"http://www.imdb.com/title/tt0076759/",
               imageUrl:"http://ia.media-imdb.com/images/M/MV5BOTIyMDY2NGQtOGJjNi00OTk4LWFhMDgtYmE3M2NiYzM0YTVmXkEyXkFqcGdeQXVyNTU1NTcwOTk@._V1_UX182_CR0,0,182,268_AL_.jpg",
               title:"Star Wars: Episode IV - A New Hope",
               year: 1977,
               summary:"Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a wookiee and two droids to save the galaxy from the Empire's world-destroying battle-station, while also attempting to rescue Princess Leia from the evil Darth Vader.",
               genre:"fantasy"
           }
       ];



var getMovies = function(){
   return db;
}

require("dotenv").config();
var Spotify = require('node-spotify-api');
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
var axios = require('axios');
var fs = require('fs');
// concert-this
// spotify-this-song
// movie-this
// do-what-it-says


//process.argv
// console.log(process.argv)
var command = process.argv[2];
var userInput = process.argv.slice(3).join(' ')



if(command === 'spotify-this-song'){

    spotify.search({ type: 'track', query: userInput }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
       
    
        console.log(data.tracks.items[0].artists[0].name);
     
        console.log(data.tracks.items[0].name); 
        console.log(data.tracks.items[0].external_urls.spotify);
      
        console.log(data.tracks.items[0].album.name);
  
    });

      
    } if(command === 'movie-this'){
      //omdb
  
      // Make a request for a user with a given ID
      axios.get("https://www.omdbapi.com/?t=" + userInput +"&y=&plot=short&apikey=trilogy")
        .then(function (response) {
          // handle success
        
          // console.log(response.data);
          console.log(response.data.Title);
          console.log(response.data.Year);
          console.log(response.data.Rated);
          // console.log(response.data.Released);
          // console.log(response.data.Runtime);
          console.log(response.data.Genre);
          // console.log(response.data.Director);
          // console.log(response.data.Writer);
          console.log(response.data.Actors);
          console.log(response.data.Plot);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
    } if (command === 'do-what-it-says'){
      //put code to read the file and start looking for the info

      fs.readFile('random.txt', 'utf8', function (err, data) {
        if (err) {
          return console.log(err);
        }

      
        var output = data.split(',');

        var userInput = output[1];
        if (output[0] === 'spotify-this-song') {
          spotify.search({ type: 'track', query: userInput }, function (err, data) {
            if (err) {
              return console.log('Error occurred: ' + err);
            }
            console.log(data.tracks.items[0].artists[0].name);

            console.log(data.tracks.items[0].name);
            console.log(data.tracks.items[0].external_urls.spotify);

            console.log(data.tracks.items[0].album.name);

          });

        } 
      });

    }




// process.env ="whatever words you put in the terminal/gitbash"



// var nodeCommand = process.argv[0];
// var fileName = process.argv[1];
// var command = process.argv[2];
// var song = process.argv[3] + process.argv[4] + process.argv[5];



// var songName = process.argv.slice(3).join(" ")

// console.log(songName);
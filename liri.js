require("dotenv").config();
var request = require("request");
var fs = require("fs");

// var twitter = new Twitter(keys.twitter);
var Twitter = function () {
    var divider = "\n------------------------------";
    this.findTweets = function (tweet) {

        // The following URL can be used to search the TV Maze API for a given show
    var URL = "https://apps.twitter.com/app/15427249/keys" + tweet;

    request(URL, function (err, response, body) {
        var jsonData = JSON.parse(body);

        var tweetData = [
             "MyTweets:" + jsonData.name,
                
        ].join("\n\n");

        fs.appendFile("log.txt", tweetData + divider, function (err) {
             if (err) throw err;
                console.log(tweetData);
           
    


    module.exports = "Twitter";

            });

        });
    };
// var spotify = new Spotify(keys.spotify);
    var Spotify = function () {
        var divider = "\n------------------------------";
        this.findSong = function (song) {

            // The following URL can be used to search the TV Maze API for a given show
     var URL = "https://developer.spotify.com/dashboard/applications/a22d30e953ca4227a64d27bcbfe91d01" + tweet;

        request(URL, function (err, response, body) {
             var jsonData = JSON.parse(body);

             var songData = [
                 "Artist(s):" + jsonData.name,
                 "SongName:" + jsonData.song.name,
                 "AlbumName:" + jsonData.album

         ].join("\n\n");

         fs.appendFile("log.txt", songData + divider, function (err) {
             if (err) throw err;
                console.log(songData);


    module.exports = "Spotify";
        });

    });

};

        var Movie = function () {
            var divider = "\n------------------------------";
            this.findMovie = function (movie) {

                // The following URL can be used to search the TV Maze API for a given show
                var URL = "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";

                request(URL, function (err, response, body) {
                    var jsonData = JSON.parse(body);

                    var movieData = [
                        "Title:" + jsonData.title,
                        "year:" + jsonData.year,
                        "Rating:" + jsonData.imdbRating,
                        "Country:" + jsonData.country,
                        "Language:" + jsonData.language,
                        "Plot:" + jsonData.plot,
                        "Actors:" + jsonData.actors

                    ].join("\n\n");

                    fs.appendFile("log.txt", movieData + divider, function (err) {
                        if (err) throw err;
                        console.log(movieData);

     module.exports = "Movie";

             });
        });
    };
        



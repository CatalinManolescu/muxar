//'use strict';

var React = require('react');
var songs = require('./songsTestData').songs;
var moods = require('./moodsTestData').moods;
var http = require('http');
$ = jQuery = require('jquery');

var genresUrl="http://localhost/api/genres";

var doParse= function(item){
	return JSON.parse(JSON.stringify(item));
}

var SongsApi = {
	getAllMySongs: function() {
		console.log("songs");
		console.log(songs);
		console.log(doParse(songs));
		return doParse(songs);
 	}, 

 	getMoodPackages: function(){
 		console.log(moods);
 		return doParse(moods);
 	},

 	getGenresList: function(callback){
	 	$.ajax({
	    	url: genresUrl
	    }).then(function(data) {
	    	callback(data);
	    });
 	},

 	firstSearchByArtist: function(artist){
 		console.log("the artist: "+artist);
 		return "raspuns!";
 	}
};

module.exports = SongsApi;
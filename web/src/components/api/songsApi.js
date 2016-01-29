//'use strict';

var React = require('react');
var songs = require('./songsTestData').songs;
var moods = require('./moodsTestData').moods;
var http = require('http');
$ = jQuery = require('jquery');

var doParse= function(item){
	return JSON.parse(JSON.stringify(item));
}

var SongsApi = {
	getAllMySongs: function() {
		return doParse(songs);
 	}, 

 	getMoodPackages: function(){
 		console.log(moods);
 		return doParse(moods);
 	},

 	getGenresList: function(callback){
	 	$.ajax({
	    	url: "http://localhost/api/genres"
	    }).then(function(data) {
	    	console.log(data);
	    	callback(data);
	    });
 	},

 	firstSearchByArtist: function(artist, callback){
 		$.ajax({
	    	url: "http://localhost/api/artists?name="+artist+"&limit=10"
	    }).then(function(data) {
	    	console.log(data);
	    	callback(data);
	    });
 	}
};

module.exports = SongsApi;
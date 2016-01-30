//'use strict';

var React = require('react');
var songs = require('./songsTestData').songs;
var moods = require('./moodsTestData').moods;
var http = require('http');
$ = jQuery = require('jquery');

var doParse= function(item){
	return JSON.parse(JSON.stringify(item));
};

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
	    	callback(data);
	    });
 	},

 	firstSearchByArtist: function(artist, callback){
 		$.ajax({
	    	url: "/api/artists?name="+artist+"&limit=10"
	    }).then(function(data) {
	    	console.log(data);
	    	callback(JSON.parse(data));
	    });
 	},

 	secondSearchByArtist: function(artist, callback){
 		$.ajax({
	    	url: "/api/artists/"+artist+"/genres"
	    }).then(function(data) {
	    	console.log(data);
	    	callback(data);
	    });
 	},

 	getPlaylistByMood: function(mood, callback){
 		console.log('gigel');
 		$.ajax({
	    	url: "/api/playlists?mood="+mood
	    }).then(function(data) {
	    	console.log(mood);
	    	console.log(data);
	    	callback(JSON.parse(data));
	    });
 	},

 	 getPopularPlaylist: function(callback){
 		$.ajax({
	    	url: "/api/playlists/featured?single=true"
	    }).then(function(data) {
	    	console.log(data);
	    	callback(data);
	    });
 	},

 	getPlaylistByCountry: function(country, callback){
 		$.ajax({
	    	url: "/api/regions?country="+country
	    }).then(function(data) {
	    	console.log(data);
	    	callback(JSON.parse(data));
	    });
 	},

 	 getPlaylistByGenre: function(genre, callback){
 		$.ajax({
	    	url: "/api/playlists?genre="+genre
	    }).then(function(data) {
	    	console.log(data);
	    	callback(JSON.parse(data));
	    });
 	}

};

module.exports = SongsApi;
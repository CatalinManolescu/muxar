'use strict';
var React= require('react');
var songs = require('./songsTestData').songs;

var SongsApi = {
	getAllMySongs: function() {
		return JSON.parse(JSON.stringify(songs));
 	} 
};

module.exports = SongsApi;
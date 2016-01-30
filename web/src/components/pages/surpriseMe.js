'use strict';

var React = require ('react');
var SongsApi = require('../api/songsApi');

var Surprise = React.createClass({
	click: function(name){
		console.log(name);
		
	},

	render: function(){
		return (
	        <div className="surpriseBox">
	         	  <img className="continent" src="https://www.wpclipart.com/geography/continents/North_America/continent_North_American_borders.png" onClick={this.click.bind(this,"North%20America")}/>
				  <img className="continent" src="https://www.wpclipart.com/geography/continents/Europe/continent_Europe_borders.png" onClick={this.click.bind(this,"europe")}/>
				  <img className="continent" src="https://www.wpclipart.com/geography/continents/Asia/continent_asian_borders.png" onClick={this.click.bind(this,"asia")}/>
				  <img className="continent" src="images/americass.png" onClick={this.click.bind(this,"South%20America")}/>
				  <img className="continent" src="https://www.wpclipart.com/geography/continents/Africa/continent_africa_w_borders.png" onClick={this.click.bind(this,"africa")} />
				  <img className="continent" src="images/australias.png" onClick={this.click.bind(this,"australia")}/>
	        </div>
		);
	}
});

module.exports = Surprise;
'use strict';

var React = require ("react");

var Genres = React.createClass({
	getInitialState : function(){
		return{
			genres: []
		};
	},
	render: function(){
		return (
	        <div className="mood">
			salut
	        </div>
		);
	}
	// componentWillMount: function(){
	// 	this.setState({ genres: GenresApi.getGenres()});
	// },

	// render: function(){
	// 	var createGenre =  function(genre){
	// 		return(
	// 			<div key={genre.id}>
	// 				<p>{genre.content}</p>
	// 			</div>
	// 		);
	// 	};
//{this.state.genres.map(createGenre, this)}
});

module.exports = Genres;
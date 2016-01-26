'use strict';

var React = require("react");

var SearchForm = React.createClass({
	render: function(){
		return(
			<form className="searchForm">
	          <input type="text" value={this.props.searchItem.search}
	                placeholder=" Search for a song.." className= "searchBox"
	                onChange={this.props.onChange}/>
	          <button type="submit" className="searchButton" onclick={this.props.onSave}>Search</button>
	      	</form>
		);
	}
});

module.exports = SearchForm;
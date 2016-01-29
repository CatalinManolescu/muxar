'use strict';

var React = require("react");

var SearchForm = React.createClass({
	render: function(){
		return(
			<form className="searchForm">
	          <input type="text" 
	          		name="search"
	          		value={this.props.searchItem.search}
	                placeholder=" Search for an artist or band.." className= "searchBox"
	                onChange={this.props.onChange}/>
	          <button type="submit" className="searchButton" 
	          		onClick={this.props.onSave}>Search</button>
	      	</form>
		);
	}
});

module.exports = SearchForm;
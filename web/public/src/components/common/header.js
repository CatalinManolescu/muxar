"use strict";

var React = require('react');
var SearchForm = require("../pages/searchForm");

var Header = React.createClass({
  getInitialState: function(){
      return {
        searchItem: {search: ""}
      };
  },

  setSearchItem: function(event){
      var field= event.target.name;
      var value= event.target.value;
      this.state.searchItem[field] = value;
      return this.setState({searchItem: this.state.searchItem});
  },

  searchTheItem:function(event){
      event.preventDefault();
      console.log("ceva...");
  },

	render: function() {
		return (
        <div className="myHeader">
          <div className="logoHolder">
              <img className="logo" src="images/logo.png" />
              <SearchForm searchItem={this.state.searchItem}
                  onChange={this.setSearchItem}
                  onSave={this.searchTheItem}/>
          </div>
        </div>
		);
	}
});

module.exports = Header;

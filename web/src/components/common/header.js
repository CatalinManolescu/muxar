"use strict";

var React = require('react');
var SearchForm = require("../pages/searchForm");
var toastr = require('toastr');
var SongsApi = require('../api/songsApi');
var Router = require('react-router');
var pubsub = require('pubsub-js');
//var transitionTo = Router.transitionTo;

var Header = React.createClass({
  mixins: [Router.Navigation],

  getInitialState: function(){
      return {
        searchItem: {search: ""},
        artists: []
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
      var self = this;
      SongsApi.firstSearchByArtist(this.state.searchItem.search, function(response){
            self.setState({artists: response});
            self.transitionTo('recommendations', {artists: response});
            //pubsub.publish('artists', self.state.artists);
          });
  },

	render: function() {
		return (
        <div className="myHeader">
          <div className="logoHolder">
              <img className="logo" src="images/logo.png" />
              <SearchForm 
                  searchItem={this.state.searchItem}
                  onChange={this.setSearchItem}
                  onSave={this.searchTheItem}/>
          </div>
        </div>
		);
	}
});

module.exports = Header;

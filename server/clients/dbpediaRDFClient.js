/**
 *
 * @author Catalin Manolescu <cc.manolescu@gmail.com>
 */

var SparqlClient = require('sparql-client');
var client = new SparqlClient('http://dbpedia.org/sparql');

var DEFAULT_LIMIT = 100;

var getOptions = function (options){
    if (!options) {
        options = {};
    }
    
    if (!options.limit) {
        options.limit = DEFAULT_LIMIT;
    }
    
    return options;
};

var getGenres = function(options, callback) {
    options = getOptions(options);
    var query = 'PREFIX rdfs: <http://dbpedia.org/property/> ' +
        'PREFIX dbp: <http://dbpedia.org/ontology/>' +
        '    select distinct ?genreLabel ?genre ' +
        'where { '+
        '    ?genre a <http://dbpedia.org/ontology/MusicGenre>. ' +
        '    ?genre rdfs:name ?genreLabel ' +
        '    FILTER (lang(?genreLabel)="en")} ' +
        'LIMIT ' + options.limit;
    client.query(query).execute(callback);
};

module.exports.client = client;
module.exports.genres = getGenres;

/**
 *
 * @author Catalin Manolescu <cc.manolescu@gmail.com>
 */

var sparql = require('sparql');
var client = new sparql.Client('http://dbpedia.org/sparql');

var getObjectsFromResult = function(bindings) {
    var length = bindings.length;
    var item = null;
    var result = [];
    
    for (var i = 0; i < length; i++) {
        item = bindings[i];
        result[i] = {
            uri: item.genre.value,
            label: item.genreLabel.value,
            lang: item.genreLabel['xml:lang']
        };
    }
    
    return result;
};


var getAllGenres = function(req, res, next) {
    var query = 'PREFIX rdfs: <http://dbpedia.org/property/> ' +
    'PREFIX dbp: <http://dbpedia.org/ontology/>' +
    '    select distinct ?genreLabel ?genre ' +
    'where { '+
    '    ?genre a <http://dbpedia.org/ontology/MusicGenre>. ' +
    '    ?genre rdfs:name ?genreLabel ' +
    '    FILTER (lang(?genreLabel)="en")} ' +
    'LIMIT 100';
    client.query(query, function(err, resp){
        if (err) {
            res.send(500,{error:err});
        } else {
            res.send(getObjectsFromResult(resp.results.bindings));
        }
        
        return next();
    });
};

module.exports.getAllGenres = getAllGenres;

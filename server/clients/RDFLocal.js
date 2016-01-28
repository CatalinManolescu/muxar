/**
 *
 * @author Catalin Manolescu <cc.manolescu@gmail.com>
 */

var SparqlClient = require('sparql-client');
var dbpediaRDFCLient = require('./dbpediaRDFClient');

var searchClient = new SparqlClient(process.env.NPM_PACKAGE_CONFIG_RDF);
var updateClient = new SparqlClient(process.env.NPM_PACKAGE_CONFIG_RDFUPDATE);

var LOCAL_URN = '<http://muxar.ro>';

var loadMusicGenre = function() {
    dbpediaRDFCLient.genres({limit:1000}, function(err, resp) {
        if (err) {
            console.log('ERR: ', err);
            return;
        }
        var length = resp.results.bindings.length;
        console.log('IMPORT GENRES >>> ', length);

        var item = null;
        var index;

        var deleteStmt = '';
        var whereClause = '';
        var insertStmt = '';

        for (index = 0; index < length; index++) {
            item = resp.results.bindings[index];
            deleteStmt += '<' + item.genre.value + '>' + ' ?type ?name . ';
            whereClause += '<' + item.genre.value + '>' + ' ?type ?name . ';
            insertStmt +=   '<' + item.genre.value + '>' + ' rdf:type <http://dbpedia.org/ontology/MusicGenre> . ' +
                            '<' + item.genre.value + '>' + ' <http://dbpedia.org/property/name> "' + item.genreLabel.value + '"@' + item.genreLabel['xml:lang'] + ' . ' 
        }
        
        var updateStmt = 'PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> ' +
            'DELETE { ' +  deleteStmt + ' } ' +
            'WHERE { ' + whereClause +  ' }; ' +
            'INSERT DATA { ' + insertStmt + ' }';
        
        updateStmt = updateStmt.replace(/\r?\n|\r/g, '');
        
        console.log(updateStmt);
        
        updateClient.query(updateStmt, function (err, res){
            if (err) {
                console.log('ERR: ', err);
            } else {
                console.log('IMPORTED: ', res.results.bindings[0]);
            }
        });
    })
};

var initRDF = function () {
    loadMusicGenre();
};

module.exports.initRDF = initRDF;
module.exports.search = searchClient;
module.exports.update = updateClient;
module.exports.URN = LOCAL_URN;

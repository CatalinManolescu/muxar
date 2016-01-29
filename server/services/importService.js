/**
 *
 * @author Catalin Manolescu <cc.manolescu@gmail.com>
 */

var RDFLocal = require('./../clients/RDFLocal');
var dbpediaRDFCLient = require('./../clients/dbpediaRDFClient');
var spotify = require('./../clients/spotifyClient');

var importMusicGenreFromDBPedia = function() {
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

        //console.log(updateStmt);

        RDFLocal.update.query(updateStmt, function (err, res){
            if (err) {
                console.log('ERR: ', err);
            } else {
                console.log('IMPORTED: OK'/*res.results.bindings[0]*/);
            }
        });
    })
};

var importSpotifyFeaturedPlaylists = function() {
    spotify.client.getFeaturedPlaylists({limit: 100, offset: 0}).then(function (data) {
        console.log('---- getFeaturedPlaylists ----');  
        //console.dir(data.body,{depth:10});
        data.body.playlists.items[0].id
        
    }, function (err) {
        console.log('Something went wrong when retrieving data : ', err);
    });
};

var doImport = function() {
    importMusicGenreFromDBPedia();
    
    spotify.requestAccess(function(err){
        
    });
};

module.exports.doImport = doImport;

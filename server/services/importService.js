/**
 *
 * @author Catalin Manolescu <cc.manolescu@gmail.com>
 */

var RDFLocal = require('./../clients/RDFLocal');
var dbpediaRDFCLient = require('./../clients/dbpediaRDFClient');
var spotify = require('./../clients/spotifyClient');
var playlistService = require('./playlistService');

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

function nameToId(name) {
    if(!name) {
        return '_';
    }
    return name.replace(/ /g, '_').toLowerCase();
}

function getLocalURI(name) {
    return RDFLocal.URN + '/' + nameToId(name);
}

function importTracks(tracks) {
    var item = null;
    var index;

    var deleteStmt = '';
    var whereClause = '';
    var insertStmt = '';

    for (index = 0; index < tracks.length; index++) {
        item = tracks[index];
        var localURI = getLocalURI(item.name);
        var localAlbumURI = getLocalURI(item.album.name);
        deleteStmt += '<' + localURI + '>' + ' ?type ?name . ';
        whereClause += '<' + localURI + '>' + ' ?type ?name . ';
        insertStmt +=   '<' + localURI + '>' + ' a  mo:Track . ' +
            '<' + localURI + '> dc:title "' + item.name + '" . ' +
            '<' + localURI + '> foaf:maker <' + localAlbumURI + '> . ' +
            '<' + localAlbumURI + '> a mo:MusicGroup . ' +
            '<' + localAlbumURI + '>foaf:name "' + item.album.name + '" . '
    }

    var updateStmt = 'PREFIX mo: <http://purl.org/ontology/mo/> ' +
        'PREFIX dc: <http://purl.org/dc/elements/1.1/> ' +
        'PREFIX xsd: <http://www.w3.org/2001/XMLSchema#> ' +
        'PREFIX tl: <http://purl.org/NET/c4dm/timeline.owl#> ' +
        'PREFIX event: <http://purl.org/NET/c4dm/event.owl#> ' +
        'PREFIX foaf: <http://xmlns.com/foaf/0.1/> ' +
        'PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#> ' +
        'DELETE { ' + deleteStmt + ' } ' +
        'WHERE { ' + whereClause + ' }; ' +
        'INSERT DATA { ' + insertStmt + ' }';

    updateStmt = updateStmt.replace(/\r?\n|\r/g, '');

    //console.log(updateStmt);

    RDFLocal.update.query(updateStmt, function (err, res){
        if (err) {
            console.log('ERR: ', err);
        } else {
            console.log('IMPORTED tracks: ');
        }
    });
}

function getTracks(playlists, index) {
    if(index < playlists.length) {
        //load tracks
        console.log('load tracks for playlist: ', playlists[index].id);
        var playlist = playlists[index];
        playlistService.playlistTracks(playlist.spotifyId, 100, 0, function(err, result){
            if(err) {
                console.log('unable to load tracks: ', err);
            }
            if (result) {
                importTracks(result);
                index++;
                getTracks(playlists, index);
            }
        });
    }
}

var importSpotifyFeaturedPlaylists = function() {
    playlistService.featuredPlaylists(false, 25, 0,function(err, res){
        if (res) {
            getTracks(res, 0);
        }
    });
};

var doImport = function() {
    //importMusicGenreFromDBPedia();
    
    importSpotifyFeaturedPlaylists();
};

module.exports.doImport = doImport;

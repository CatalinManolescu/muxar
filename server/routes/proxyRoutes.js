/**
 *
 * @author Catalin Manolescu <cc.manolescu@gmail.com>
 */

var request = require('request');

var config = {
    base_url: process.env.NPM_PACKAGE_CONFIG_PROXY
};

var searchArtistsByName = function(req, res, next) {
    var limit = req.params.limit ? req.params.limit : 10;
    var url = config.base_url + 'api/Artists/Search?artistLabel=' + req.query.name + '&limit=' + limit;
    request.get({
        url: url
    }, function (error, response, body) {
        if (error) {
            res.send(500,{error:error});
        } else {
            res.send(body);
        }
    });

    return next();
};

var searchArtistsByGenre = function(req, res, next) {
    var limit = req.params.limit ? req.params.limit : 10;
    var genres = JSON.parse(req.query.genres);
    var url = config.base_url + 'api/Artists/SearchByGenres?limit=' + limit;
    request.post(url,{
        json: genres
    }, function (error, response, body) {
        if (error) {
            res.send(500,{error:error});
        } else {
            res.send(body);
        }
    });

    return next();
};

var searchArtists = function(req, res, next) {
    var limit = req.params.limit ? req.params.limit : 10;
    console.log('query: ', req.query);
    if (req.query.genres) {
        return searchArtistsByGenre(req,res,next);
    } else if (req.query.name) {
        return searchArtistsByName(req,res,next);
    }

    return next();
};


var getArtistByName = function(req, res, next) {
    var limit = req.params.limit ? req.params.limit : 10;
    var url = config.base_url + 'api/Artists/SearchDetails?artistName=' + req.params.artist + '&limit=' + limit;
    request.get({
        url: url
    }, function (error, response, body) {
        if (error) {
            res.send(500,{error:error});
        } else {
            res.send(body);
        }
    });

    return next();
};

var searchGenresByArtist = function(req, res, next) {
    var limit = req.params.limit ? req.params.limit : 10;
    var url = config.base_url + 'api/Genres/GetByArtist?artistLabel=' + req.params.artist + '&limit=' + limit;
    request.get({
        url: url
    }, function (error, response, body) {
        if (error) {
            res.send(500,{error:error});
        } else {
            res.send(body);
        }
    });

    return next();
};

var searchPlaylists = function(req, res, next) {
    var limit = req.params.limit ? req.params.limit : 10;
    if (req.query.echonest) {
        return searchPlaylistsByArtist(req,res,next);
    } 

    return next();
};

var searchPlaylistsByArtist = function(req, res, next) {
    var limit = req.params.limit ? req.params.limit : 10;
    var url = config.base_url + 'api/Playlists/GetByArtist?artistUri=' + req.query.echonest + '&limit=' + limit;
    request.get({
        url: url
    }, function (error, response, body) {
        if (error) {
            res.send(500,{error:error});
        } else {
            res.send(body);
        }
    });

    return next();
};

var searchRegions = function(req, res, next) {
    var limit = req.params.limit ? req.params.limit : 10;
    if (req.query.continent) {
        return searchRegionsByContinent(req,res,next);
    } if (req.query.country) {
        return searchRegionsByCountry(req,res,next);
    }

    return next();
};

var searchRegionsByContinent = function(req, res, next) {
    var limit = req.params.limit ? req.params.limit : 10;
    var url = config.base_url + 'api/Regions/GetByContinent?continentUri=' + req.query.continent + '&limit=' + limit;
    request.get({
        url: url
    }, function (error, response, body) {
        if (error) {
            res.send(500,{error:error});
        } else {
            res.send(body);
        }
    });

    return next();
};

var searchRegionsByCountry = function(req, res, next) {
    var limit = req.params.limit ? req.params.limit : 10;
    var url = config.base_url + 'api/Regions/GetByCountry?countryUri=' + req.query.country + '&limit=' + limit;
    request.get({
        url: url
    }, function (error, response, body) {
        if (error) {
            res.send(500,{error:error});
        } else {
            res.send(body);
        }
    });

    return next();
};

module.exports.searchPlaylists = searchPlaylists;
module.exports.searchArtists = searchArtists;
module.exports.getArtistByName = getArtistByName;
module.exports.searchGenresByArtist = searchGenresByArtist;
module.exports.searchRegions = searchRegions;

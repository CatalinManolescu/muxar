/**
 *
 * @author Catalin Manolescu <cc.manolescu@gmail.com>
 */

var RDFLocal = require('./../clients/RDFLocal');
var importService = require('./../services/importService');

var initRDF = function(req, res, next) {
    importService.doImport();
    res.send('please wait until we finish. check log for errors');
    return next();
};

var sparqlSearch = function(req, res, next) {
    var query = req.params.query;
    if (!query) {
        res.send(400,{error:'query property not set'});
        return next();
    }
    
    RDFLocal.search.query(query, function(err, resp){
        if (err) {
            res.send(500,{error:err});
        } else {
            res.send(resp);
        }
    });
    return next();
};

module.exports.initRDF = initRDF;
module.exports.search = sparqlSearch;

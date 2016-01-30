/**
 *
 * @author Catalin Manolescu <cc.manolescu@gmail.com>
 */

var SparqlClient = require('sparql-client');

var searchClient = new SparqlClient(process.env.NPM_PACKAGE_CONFIG_RDF);
var updateClient = new SparqlClient(process.env.NPM_PACKAGE_CONFIG_RDFUPDATE);

var LOCAL_URN = 'http://muxar.ro';

module.exports.search = searchClient;
module.exports.update = updateClient;
module.exports.URN = LOCAL_URN;

using System;
using System.Collections.Generic;
using System.Linq;
using VDS.RDF;
using VDS.RDF.Parsing;
using VDS.RDF.Query;

namespace Muxar.BrightStarDb.Endpoints
{
    public class DbpediaEndpoint
    {
        private readonly Uri sparqlUri;
        private readonly SparqlRemoteEndpoint sparqlRemoteEndpoint;

        public DbpediaEndpoint()
        {
            sparqlUri = new Uri("http://dbpedia.org/sparql");
            sparqlRemoteEndpoint = new SparqlRemoteEndpoint(sparqlUri);
        }

        public void Test()
        {
            var query = "DESCRIBE ?person WHERE {?person a <http://dbpedia.org/ontology/Person>} LIMIT 1";

            //Get the result
            var graph = sparqlRemoteEndpoint.QueryWithResultGraph(query);

            IGraph g = new Graph();
            UriLoader.Load(g, new Uri("http://dbpedia.org/resource/Barack_Obama"));
        }

        public List<string> GetBandsWithName(string name)
        {
            var query = @"PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>        
                        prefix dbo:  <http://dbpedia.org/ontology/> 
                        SELECT distinct ?artist
                        WHERE {
                            ?artist a dbo:MusicalArtist .
                        ?artist rdfs:label ?artistName.

                        Filter(contains(lcase(str(?artistName)), '" + name + @"')) .
                        }
                        LIMIT 20";
            var resultSet = sparqlRemoteEndpoint.QueryWithResultSet(query);

            var results = resultSet.Results.Select(x => x.Value("artist").ToString()).ToList();

            return results;
        }
    }
}

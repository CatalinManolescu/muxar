using System;
using System.Collections.Generic;
using System.Linq;
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

        public List<string> GetArtistsWithName(string name)
        {
            var query = @"PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>        
                        PREFIX dbo:  <http://dbpedia.org/ontology/> 
                        PREFIX schema:    <http://schema.org/>
                        SELECT distinct ?artist ?artistName
                        WHERE {
                        VALUES ?type { schema:MusicGroup dbo:MusicalArtist }
                            ?artist a ?type .
                            ?artist rdfs:label ?artistName.
                        FILTER(CONTAINS(LCASE(STR(?artistName)), '" + name.ToLower() + @"')) .
                        FILTER(lang(?artistName) = 'en')
                        }
                        GROUP BY ?artist ?artistName
                        ORDER BY ?artistName
                        LIMIT 30";
            var resultSet = sparqlRemoteEndpoint.QueryWithResultSet(query);

            var results = resultSet.Results.Select(x => x.Value("artistName").ToString().Replace("@en", "")).ToList();

            return results;
        }

        public List<string> GetArtistsByGenres(IList<string> genres)
        {
            var genreFilter = genres.Aggregate("",
                (current, genre) => current + ("contains(lcase(str(?g)), '" + genre.ToLower() + "') ||"));
            genreFilter = genreFilter.Substring(0, genreFilter.LastIndexOf("||", StringComparison.Ordinal));

            var query = @"PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>        
                        PREFIX dbo:  <http://dbpedia.org/ontology/> 
                        PREFIX sco:    <http://schema.org/>
                        SELECT DISTINCT ?artist ?artistName min(?g)
                        WHERE {
                        VALUES ?type { sco:MusicGroup dbo:MusicalArtist }
                            ?artist a ?type .
                            ?artist rdfs:label ?artistName.
                            ?artist dbo:genre ?genre .
                            ?genre rdfs:label ?g .

                        FILTER (lang(?artistName) = 'en') .
                        FILTER(" + genreFilter + @")
                        }
                                GROUP BY ?artist? artistName
                        ORDER BY ?artistName
                        LIMIT 100";
            var resultSet = sparqlRemoteEndpoint.QueryWithResultSet(query);

            var results = resultSet.Results.Select(x => x.Value("artistName").ToString().Replace("@en", "")).ToList();

            return results;
        }

        public List<string> GetGenresByArtist(string artistName)
        {
            var query = @"PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>        
                        PREFIX dbo:  <http://dbpedia.org/ontology/> 
                        SELECT DISTINCT ?genreLabel
                        WHERE {
                        ?resource dbo:genre ?genre.
                        ?resource rdfs:label '"+artistName + @"'@en.
                        ?genre rdfs:label? genreLabel
                        FILTER(lang(?genreLabel) = 'en')
                        }
                        LIMIT 100";
            var resultSet = sparqlRemoteEndpoint.QueryWithResultSet(query);

            var results = resultSet.Results.Select(x => x.Value("genreLabel").ToString().Replace("@en", "")).ToList();

            return results;
        }
    }
}

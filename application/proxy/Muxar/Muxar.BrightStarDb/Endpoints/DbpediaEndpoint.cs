using System;
using System.Collections.Generic;
using System.Linq;
using VDS.RDF.Query;

namespace Muxar.BrightStarDb.Endpoints
{
    public class DbpediaEndpoint
    {
        private readonly SparqlRemoteEndpoint sparqlRemoteEndpoint;

        public DbpediaEndpoint()
        {
            var sparqlUri = new Uri("http://dbpedia.org/sparql");
            sparqlRemoteEndpoint = new SparqlRemoteEndpoint(sparqlUri);
        }

        public List<string> GetArtistsWithName(string name)
        {
            var query = string.Format(SparqlQueryResources.SearchArtistsByLabel, name.ToLower());
            var resultSet = sparqlRemoteEndpoint.QueryWithResultSet(query);
            var results = resultSet.Results.Select(x => x.Value("artistName").ToString().Replace("@en", "")).ToList();

            return results;
        }

        public List<string> GetArtistsByGenres(IList<string> genres)
        {
            var genreFilter = genres.Aggregate(string.Empty,
                (current, genre) => current + string.Format(SparqlQueryResources.ContainsPattern, genre.ToLower()));
            genreFilter = genreFilter.Substring(0, genreFilter.LastIndexOf("||", StringComparison.Ordinal));

            var query = string.Format(SparqlQueryResources.SearchArtistsByLabel, genreFilter);
            var resultSet = sparqlRemoteEndpoint.QueryWithResultSet(query);

            var results = resultSet.Results.Select(x => x.Value("artistName").ToString().Replace("@en", "")).ToList();

            return results;
        }

        public List<string> GetGenresByArtist(string artistName)
        {
            var query = string.Format(SparqlQueryResources.GetGenresByArtist, artistName);
            var resultSet = sparqlRemoteEndpoint.QueryWithResultSet(query);

            var results = resultSet.Results.Select(x => x.Value("genreLabel").ToString().Replace("@en", "")).ToList();

            return results;
        }
    }
}

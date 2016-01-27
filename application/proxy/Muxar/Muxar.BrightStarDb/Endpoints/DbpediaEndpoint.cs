﻿using System;
using System.Collections.Generic;
using System.Linq;
using Muxar.BrightStarDb.Helpers;
using VDS.RDF.Query;
using System.Configuration;

namespace Muxar.BrightStarDb.Endpoints
{
    public class DbpediaEndpoint
    {
        private const string DbpediaEndpointUri = "DbpediaEndpointUri";
        private readonly SparqlRemoteEndpoint sparqlRemoteEndpoint;

        public DbpediaEndpoint()
        {
            var sparqlUri = new Uri(ConfigurationManager.AppSettings[DbpediaEndpointUri]);
            sparqlRemoteEndpoint = new SparqlRemoteEndpoint(sparqlUri);
        }

        public IList<string> GetArtistsWithName(string name)
        {
            var query = string.Format(SparqlResources.SearchArtistsByLabel, name.ToLower());
            var resultSet = sparqlRemoteEndpoint.QueryWithResultSet(query);
            var results =
                resultSet.Results.Select(
                    x =>
                        x.Value(SparqlResources.ArtistName)
                            .ToString()
                            .Replace(SparqlResources.EnLangQualifier, string.Empty)).ToList();

            return results;
        }

        public IList<string> GetArtistsByGenres(IList<string> genres)
        {
            var genreFilter = DbpediaHelper.GenerateGenreFilter(genres);

            var query = string.Format(SparqlResources.SearchArtistsByLabel, genreFilter);
            var resultSet = sparqlRemoteEndpoint.QueryWithResultSet(query);
            var results =
                resultSet.Results.Select(
                    x =>
                        x.Value(SparqlResources.ArtistName)
                            .ToString()
                            .Replace(SparqlResources.EnLangQualifier, string.Empty)).ToList();

            return results;
        }

        public IList<string> GetGenresByArtist(string artistName)
        {
            var query = string.Format(SparqlResources.GetGenresByArtist, artistName);
            var resultSet = sparqlRemoteEndpoint.QueryWithResultSet(query);
            var results =
                resultSet.Results.Select(
                    x =>
                        x.Value(SparqlResources.GenreLabel)
                            .ToString()
                            .Replace(SparqlResources.EnLangQualifier, string.Empty)).ToList();

            return results;
        }
    }
}

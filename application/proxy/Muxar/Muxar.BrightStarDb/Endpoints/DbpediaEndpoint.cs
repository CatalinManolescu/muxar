using System;
using System.Collections.Generic;
using System.Linq;
using Muxar.BrightStarDb.Helpers;
using VDS.RDF.Query;
using System.Configuration;
using Muxar.EntitiesDto;

namespace Muxar.BrightStarDb.Endpoints
{
    public class DbpediaEndpoint
    {
        private const string DbpediaEndpointUri = "DbpediaEndpointUri";
        private readonly SparqlRemoteEndpoint sparqlRemoteEndpoint;

        public DbpediaEndpoint()
        {
            var sparqlUri = new Uri(ConfigurationManager.AppSettings[DbpediaEndpointUri]);
            sparqlRemoteEndpoint = new SparqlRemoteEndpoint(sparqlUri) {Timeout = 600000};

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

        public void GetArtistByNameAndWebsite(ArtistDto artistDto)
        {
            var query = string.Format(SparqlResources.SearchArtistByNameAndWebsite, artistDto.Name.ToLower(),
                artistDto.Wiki?.ToLower(), artistDto.Website?.ToLower());
            var resultSet = sparqlRemoteEndpoint.QueryWithResultSet(query);
            DbpediaHelper.UpdateArtistData(artistDto, resultSet);
        }



        public IList<string> GetArtistsByGenres(IList<string> genres)
        {
            var genreFilter = DbpediaHelper.GenerateGenreFilter(genres);

            var query = string.Format(SparqlResources.GetArtistsByGenre, genreFilter);
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

        public Dictionary<string, string> GetArtistsByCountry(string countryUri)
        {
            var query = string.Format(SparqlResources.SearchArtistsByCountry, countryUri);
            var resultSet = sparqlRemoteEndpoint.QueryWithResultSet(query);
            var result = resultSet.Results.ToDictionary(x => x.Value(SparqlResources.Artist).ToString(),
                x =>
                    x.Value(SparqlResources.ArtistName)
                        .ToString()
                        .Replace(SparqlResources.EnLangQualifier, string.Empty));
            return result;
        }

        public void GetSongByNameAndArtist(SongDto songDto)
        {
            var query = string.Format(SparqlResources.GetSongByNameAndArtistName, songDto.Name.ToLower(),
                songDto.ArtistName.ToLower());
            var resultSet = sparqlRemoteEndpoint.QueryWithResultSet(query);
            DbpediaHelper.UpdateSongData(resultSet, songDto);
        }
    }
}

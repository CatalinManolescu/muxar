using System;
using System.Collections.Generic;
using System.Linq;
using Muxar.EntitiesDto;
using VDS.RDF.Query;

namespace Muxar.BrightStarDb.Helpers
{
    public class DbpediaHelper
    {
        public static string GenerateGenreFilter(IEnumerable<string> genres)
        {
            var genreFilter = genres.Aggregate(string.Empty,
                (current, genre) => current + string.Format(SparqlResources.ContainsPattern, genre.ToLower()));
            genreFilter = genreFilter.Substring(0, genreFilter.LastIndexOf("||", StringComparison.Ordinal));
            return genreFilter;
        }

        public static void UpdateArtistData(ArtistDto artistDto, SparqlResultSet resultSet)
        {
            var result = resultSet.Results.FirstOrDefault();
            if (result == null) return;

            artistDto.Id = result.Value(SparqlResources.Artist).ToString();
            if (result.HasValue(SparqlResources.Wiki))
            {
                artistDto.Wiki = result.Value(SparqlResources.Wiki)?.ToString();
            }
            if (result.HasValue(SparqlResources.Homepage))
            {
                artistDto.Website = result.Value(SparqlResources.Homepage)?.ToString();
            }
            if (result.HasValue(SparqlResources.Thumbnail))
            {
                artistDto.Thumbnail = result.Value(SparqlResources.Thumbnail)?.ToString();
            }
            if (result.HasValue(SparqlResources.Abstract))
            {
                artistDto.Abstract = result.Value(SparqlResources.Abstract)?.ToString();
            }
        }
    }
}

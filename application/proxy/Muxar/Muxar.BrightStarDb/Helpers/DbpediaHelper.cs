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

        public static void UpdateSongData(SparqlResultSet resultSet, SongDto songDto)
        {
            var result = resultSet.Results.FirstOrDefault();
            if (result == null) return;
            songDto.Id = result.Value(SparqlResources.Song).ToString();
            if (result.HasValue(SparqlResources.Thumbnail))
            {
                songDto.Thumbnail = result.Value(SparqlResources.Thumbnail)?.ToString();
            }
        }

        public static IList<CountryDto> GenerateCountriesOfEuropeResponse(SparqlResultSet resultSet)
        {
            var result = resultSet.Results;
            if (result == null) return null;
            var countries = new List<CountryDto>();
            foreach (var value in result)
            {
                var country = new CountryDto
                {
                    Id = value.Value(SparqlResources.Country).ToString(),
                    Name = value.Value(SparqlResources.CountryLabel).ToString()
                        .Replace(SparqlResources.EnLangQualifier, string.Empty)
                };
                if (value.HasValue(SparqlResources.Thumbnail))
                {
                    country.Thumbnail = value.Value(SparqlResources.Thumbnail)?.ToString();
                }
                countries.Add(country);
            }
            return countries;
        }
    }
}

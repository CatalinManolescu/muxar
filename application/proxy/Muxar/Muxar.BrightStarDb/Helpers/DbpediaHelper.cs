using System;
using System.Collections.Generic;
using System.Linq;

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
    }
}

namespace Muxar.Helpers
{
    public class ArtistsHelper
    {
        public static string RefineArtistName(string artistName)
        {
            var refinedArtistName = artistName.Replace(Resources.Band, string.Empty)
                .Replace(Resources.Musician, string.Empty)
                .Replace(Resources.Producer, string.Empty)
                .Replace(Resources.Songwriter, string.Empty)
                .Replace(Resources.Singer, string.Empty);
            return refinedArtistName;
        }
    }
}
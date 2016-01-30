using System;
using System.Configuration;

namespace Muxar.BrightStarDb.Helpers
{
    public class EchonestUriHelper
    {
        private const string EchonestEndpointUri = "EchonestEndpointUri";
        private const string EchonestApiKey = "EchonestApiKey";

        public static Uri GenerateSearchUri(string artistName)
        {
            var uriString =
                $"{ConfigurationManager.AppSettings[EchonestEndpointUri]}{EchonestResources.SearchArtist}" +
                $"{ConfigurationManager.AppSettings[EchonestApiKey]}{EchonestResources.NameUriPath}{artistName}";
            var uri = new Uri(uriString);
            return uri;
        }

        public static Uri GenerateWebsiteUri(string echonestId)
        {
            var uriString =
                $"{ConfigurationManager.AppSettings[EchonestEndpointUri]}{EchonestResources.WebsiteArtist}" +
                $"{ConfigurationManager.AppSettings[EchonestApiKey]}{EchonestResources.IdUriPath}{echonestId}" +
                $"{EchonestResources.JsonFormat}";
            var uri = new Uri(uriString);
            return uri;
        }

        public static Uri GeneratePlaylistByArtistUri(string artists)
        {
            var uriString =
                $"{ConfigurationManager.AppSettings[EchonestEndpointUri]}{EchonestResources.PlaylistPath}" +
                $"{ConfigurationManager.AppSettings[EchonestApiKey]}{EchonestResources.SpotifyBucket}" +
                $"{EchonestResources.LimitPath}{EchonestResources.VarietyPath}{EchonestResources.ResultsPath}" +
                $"{EchonestResources.TracksBucket}{EchonestResources.ArtistRadioType}" +
                $"{EchonestResources.ArtistPath}{artists}";
            var uri = new Uri(uriString);
            return uri;
        }

        public static Uri GeneratePlaylistByGenreUri(string genre)
        {
            var uriString =
                $"{ConfigurationManager.AppSettings[EchonestEndpointUri]}{EchonestResources.PlaylistPath}" +
                $"{ConfigurationManager.AppSettings[EchonestApiKey]}{EchonestResources.SpotifyBucket}" +
                $"{EchonestResources.LimitPath}{EchonestResources.VarietyPath}{EchonestResources.ResultsPath}" +
                $"{EchonestResources.TracksBucket}{EchonestResources.GenreRadioType}" +
                $"{EchonestResources.GenrePath}{genre}";
            var uri = new Uri(uriString);
            return uri;
        }

        public static Uri GeneratePlaylistByMoodAndDecadeUri(string mood, string decade)
        {
            var uriString =
                $"{ConfigurationManager.AppSettings[EchonestEndpointUri]}{EchonestResources.PlaylistPath}" +
                $"{ConfigurationManager.AppSettings[EchonestApiKey]}{EchonestResources.SpotifyBucket}" +
                $"{EchonestResources.LimitPath}{EchonestResources.VarietyPath}{EchonestResources.ResultsPath}" +
                $"{EchonestResources.TracksBucket}{EchonestResources.ArtistDescriptionType}" +
                $"{EchonestResources.MoodPath}{mood}";

            if (!string.IsNullOrEmpty(decade))
            {
                uriString = $"{uriString}{EchonestResources.DescriptionPath}{decade}";
            }
            var uri = new Uri(uriString);
            return uri;
        }

        public static Uri GeneratePlaylistBySong(string song)
        {
            var uriString =
               $"{ConfigurationManager.AppSettings[EchonestEndpointUri]}{EchonestResources.PlaylistPath}" +
               $"{ConfigurationManager.AppSettings[EchonestApiKey]}{EchonestResources.SpotifyBucket}" +
               $"{EchonestResources.LimitPath}{EchonestResources.VarietyPath}{EchonestResources.ResultsPath}" +
               $"{EchonestResources.TracksBucket}{EchonestResources.SongRadioType}" +
               $"{EchonestResources.SongPath}{song}";
            var uri = new Uri(uriString);
            return uri;
        }
    }
}

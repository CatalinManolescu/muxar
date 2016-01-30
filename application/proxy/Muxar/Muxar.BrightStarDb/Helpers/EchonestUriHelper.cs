using System;
using System.Collections.Generic;
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
                $"{EchonestResources.ArtistRadioType}{EchonestResources.TracksBucket}" +
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
                $"{EchonestResources.GenreRadioType}{EchonestResources.TracksBucket}" +
                $"{EchonestResources.GenrePath}{genre}";
            var uri = new Uri(uriString);
            return uri;
        }
    }
}

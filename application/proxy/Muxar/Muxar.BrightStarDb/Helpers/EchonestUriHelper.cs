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
    }
}

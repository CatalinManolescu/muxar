using System;
using System.Configuration;
using System.Net.Http;
using System.Threading.Tasks;
using Muxar.EntitiesDto;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace Muxar.BrightStarDb.Endpoints
{
    public class EchonestEndpoint
    {
        private const string EchonestEndpointUri = "EchonestEndpointUri";
        private const string EchonestApiKey = "EchonestApiKey";

        public EchonestEndpoint()
        {
            
        }

        public async Task<ArtistDto> SearchArtist(string artistName)
        {
            var uriString = $"{ConfigurationManager.AppSettings[EchonestEndpointUri]}{EchonestResources.SearchArtist}" +
                            $"{ConfigurationManager.AppSettings[EchonestApiKey]}{EchonestResources.Name}{artistName}";
            var uri = new Uri(uriString);
            var client = new HttpClient();
            var response = await client.GetAsync(uri).ConfigureAwait(false);

            ArtistDto artist = null;
            if (response.IsSuccessStatusCode)
            {
                string content = await response.Content.ReadAsStringAsync().ConfigureAwait(false);
                dynamic iObj = JsonConvert.DeserializeObject(content) as JObject;
               
                artist = new ArtistDto
                {
                    EchonestId = ((iObj["response"] as JObject)["artists"] as JArray)[0]["id"].ToString(),
                    Name = ((iObj["response"] as JObject)["artists"] as JArray)[0]["name"].ToString()
                };

            }
            return artist;
        }

        //public double GetArtistsHottness(string artist)
        //{
            
        //}

        //public double GetArtistsFamiliarity(string artist)
        //{
            
        //}

    }
}

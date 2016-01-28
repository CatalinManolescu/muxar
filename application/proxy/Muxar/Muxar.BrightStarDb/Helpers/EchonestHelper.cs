using System.Threading.Tasks;
using Muxar.EntitiesDto;
using Newtonsoft.Json.Linq;

namespace Muxar.BrightStarDb.Helpers
{
    public class EchonestHelper
    {
        public static async Task<JObject> GetSearchResponse(string artistName)
        {
            var uri = EchonestUriHelper.GenerateSearchUri(artistName);
            var response = await HttpClientHelper.GetResponseMessage(uri);
            return response;
        }

        public static ArtistDto CreateSearchArtistResponse(JObject response)
        {
            ArtistDto artist = null;
            var result = ((response[EchonestResources.Response] as JObject)[EchonestResources.Artists] as JArray)?.First;
            if (result != null)
                artist = new ArtistDto
                {
                    EchonestId = result[EchonestResources.Id].ToString(),
                    Name = result[EchonestResources.Name].ToString()
                };
            return artist;
        }

        public static async Task<JObject> GetWebsiteResponse(string echonestId)
        {
            var uri = EchonestUriHelper.GenerateWebsiteUri(echonestId);
            var response = await HttpClientHelper.GetResponseMessage(uri);
            return response;
        }

        public static ArtistDto CreateFindWebsiteResponse(JObject response, ArtistDto artistDto)
        {
            var result = (response[EchonestResources.Response] as JObject)[EchonestResources.Urls] as JObject;
            if (result != null)
                artistDto.Website = result[EchonestResources.OfficialWebsite]?.ToString();
                artistDto.Wiki = result[EchonestResources.Wiki]?.ToString();
            return artistDto;
        }
    }
}

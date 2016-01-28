using System.Threading.Tasks;
using Muxar.BrightStarDb.Helpers;
using Muxar.EntitiesDto;

namespace Muxar.BrightStarDb.Endpoints
{
    public class EchonestEndpoint
    {
        public async Task<ArtistDto> SearchArtist(string artistName)
        {
            var response = await EchonestHelper.GetSearchResponse(artistName);
            if (response == null) return null;

            var artist = EchonestHelper.CreateSearchArtistResponse(response);
            return artist;
        }

        public async Task FindWebsite(ArtistDto artistDto)
        {
            var response = await EchonestHelper.GetWebsiteResponse(artistDto.EchonestId);
            EchonestHelper.CreateFindWebsiteResponse(response, artistDto);
        }

        //public double GetArtistsHottness(string artist)
        //{
            
        //}

        //public double GetArtistsFamiliarity(string artist)
        //{
            
        //}
    }
}

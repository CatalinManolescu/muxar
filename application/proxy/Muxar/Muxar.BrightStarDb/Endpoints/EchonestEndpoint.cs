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

        //public double GetArtistsHottness(string artist)
        //{
            
        //}

        //public double GetArtistsFamiliarity(string artist)
        //{
            
        //}
    }
}

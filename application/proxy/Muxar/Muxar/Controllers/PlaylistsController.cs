using System.Threading.Tasks;
using System.Web.Http;
using Muxar.BrightStarDb.Endpoints;

namespace Muxar.Controllers
{
    public class PlaylistsController : BaseApiController
    {
        private DbpediaEndpoint dbpediaEndpoint;
        private EchonestEndpoint echonestEndpoint;

        public PlaylistsController()
        {
            dbpediaEndpoint = new DbpediaEndpoint();
            echonestEndpoint = new EchonestEndpoint();
        }

        [HttpGet]
        [Route("api/Playlists/GetByGenre")]
        public async Task<IHttpActionResult> GetByGenre(string genreLabel)
        {
            return Ok();
        }
    }
}

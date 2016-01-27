using System.Web.Http;
using Muxar.BrightStarDb.Endpoints;

namespace Muxar.Controllers
{
    public class GenresController : ApiController
    {
        private DbpediaEndpoint dbpediaEndpoint;

        public GenresController()
        {
            dbpediaEndpoint = new DbpediaEndpoint();
        }

        public IHttpActionResult GetByArtist(string artistLabel)
        {
            var result = dbpediaEndpoint.GetGenresByArtist(artistLabel);
            return Ok(result);
        }
    }
}

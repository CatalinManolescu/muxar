using System.Web.Http;
using Muxar.BrightStarDb.Endpoints;

namespace Muxar.Controllers
{
    public class BandsController : ApiController
    {
        private DbpediaEndpoint dbpediaEndpoint;

        public BandsController()
        {
            dbpediaEndpoint = new DbpediaEndpoint();
        }

        [HttpGet]
        public IHttpActionResult Get(string artistLabel)
        {
            var result = dbpediaEndpoint.GetArtistsWithName(artistLabel);
            return Ok(result);
        }

    }
}

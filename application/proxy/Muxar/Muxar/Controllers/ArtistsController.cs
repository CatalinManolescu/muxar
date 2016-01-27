using System.Collections;
using System.Collections.Generic;
using System.Web.Http;
using Muxar.BrightStarDb.Endpoints;

namespace Muxar.Controllers
{
    public class ArtistsController : ApiController
    {
        private DbpediaEndpoint dbpediaEndpoint;

        public ArtistsController()
        {
            dbpediaEndpoint = new DbpediaEndpoint();
        }

        [HttpGet]
        public IHttpActionResult GetByLabel(string artistLabel)
        {
            var result = dbpediaEndpoint.GetArtistsWithName(artistLabel);
            return Ok(result);
        }

        public IHttpActionResult GetByGenres(IList<string> genresList)
        {
            var result = dbpediaEndpoint.GetArtistsByGenres(genresList);
            return Ok(result);
        }
    }
}

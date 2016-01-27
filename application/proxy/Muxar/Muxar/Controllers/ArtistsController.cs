using System.Collections;
using System.Collections.Generic;
using System.Web.Http;
using Muxar.BrightStarDb.Endpoints;
using Muxar.Helpers;

namespace Muxar.Controllers
{
    public class ArtistsController : BaseApiController
    {
        private readonly DbpediaEndpoint dbpediaEndpoint;

        public ArtistsController()
        {
            dbpediaEndpoint = new DbpediaEndpoint();
        }

        [HttpGet]
        [Route("api/Artists/GetByGenres")]
        public IHttpActionResult GetByGenres(IList<string> genresList)
        {
            if (genresList == null) return BadRequest("genresList cannot be null");
            if (!ModelState.IsValid) return ValidationError();
            var result = dbpediaEndpoint.GetArtistsByGenres(genresList);
            return Ok(result);
        }

        [HttpGet]
        [Route("api/Artists/Search")]
        public IHttpActionResult Get(string artistLabel)
        {
            if (Validators.StringInputValidator(artistLabel))
                return BadRequest(string.Format(Resources.input, "artistLabel"));

            var result = dbpediaEndpoint.GetArtistsWithName(artistLabel);
            return Ok(result);
        }
    }
}

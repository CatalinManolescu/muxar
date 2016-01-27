using System.Collections.Generic;
using System.Web.Http;
using Muxar.BrightStarDb.Endpoints;
using Muxar.Helpers;

namespace Muxar.Controllers
{
    /// <summary>
    /// Here you can get all artists-related queries
    /// </summary>
    public class ArtistsController : BaseApiController
    {
        private readonly DbpediaEndpoint dbpediaEndpoint;

        public ArtistsController()
        {
            dbpediaEndpoint = new DbpediaEndpoint();
        }

        /// <summary>
        /// Get artists by providing a collection of strings - genres
        /// </summary>
        /// <param name="genresList">genresList - Collection of string</param>
        /// <returns>a list of strings representing artists' names</returns>
        [HttpGet]
        [Route("api/Artists/GetByGenres")]
        public IHttpActionResult GetByGenres(IList<string> genresList)
        {
            if (genresList == null) return BadRequest("genresList cannot be null");
            if (!ModelState.IsValid) return ValidationError();
            var result = dbpediaEndpoint.GetArtistsByGenres(genresList);
            return Ok(result);
        }

        /// <summary>
        /// search artists based on their name
        /// </summary>
        /// <param name="artistLabel"></param>
        /// <returns>a list of strings representing artists' names</returns>
        [HttpGet]
        [Route("api/Artists/Search")]
        public IHttpActionResult Search(string artistLabel)
        {
            if (Validators.StringInputValidator(artistLabel))
                return BadRequest(string.Format(Resources.input, "artistLabel"));

            var result = dbpediaEndpoint.GetArtistsWithName(artistLabel);
            return Ok(result);
        }
    }
}

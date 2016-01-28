using System.Collections.Generic;
using System.Threading.Tasks;
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
        private EchonestEndpoint echonestEndpoint;

        public ArtistsController()
        {
            dbpediaEndpoint = new DbpediaEndpoint();
            echonestEndpoint = new EchonestEndpoint();
        }

        /// <summary>
        /// Get artists by providing a collection of strings - genres
        /// </summary>
        /// <param name="genresList">genresList - Collection of string</param>
        /// <returns>a list of strings representing artists' names</returns>
        [HttpPost]
        [Route("api/Artists/SearchByGenres")]
        public IHttpActionResult SearchByGenres(IList<string> genresList)
        {
            if (genresList == null) return BadRequest("genresList cannot be null");
            if (!ModelState.IsValid) return ValidationError();
            var result = dbpediaEndpoint.GetArtistsByGenres(genresList);
            return Ok(result);
        }

        /// <summary>
        /// search artists based on their approximate
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

        /// <summary>
        /// After picking an artist's name from the suggestions, associate dbpedia's info with ehconest's
        /// </summary>
        /// <param name="artistName"></param>
        /// <returns></returns>
        public async Task<IHttpActionResult> SearchDetails(string artistName)
        {
            if (Validators.StringInputValidator(artistName))
                return BadRequest(string.Format(Resources.input, "artistName"));

            var artist = await echonestEndpoint.SearchArtist(artistName);
            await echonestEndpoint.FindWebsite(artist);
            dbpediaEndpoint.GetArtistByNameAndWebsite(artist);
            return Ok(artist);
        }
    }
}

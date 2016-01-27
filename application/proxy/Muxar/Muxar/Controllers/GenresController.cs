using System.Web.Http;
using Muxar.BrightStarDb.Endpoints;
using Muxar.Helpers;

namespace Muxar.Controllers
{
    public class GenresController : BaseApiController
    {
        private readonly DbpediaEndpoint dbpediaEndpoint;

        public GenresController()
        {
            dbpediaEndpoint = new DbpediaEndpoint();
        }

        /// <summary>
        /// get genres of an artist
        /// </summary>
        /// <param name="artistLabel">string containing artist property "label"</param>
        /// <returns>collection of genres as strings</returns>
        public IHttpActionResult GetByArtist(string artistLabel)
        {
            if (Validators.StringInputValidator(artistLabel))
                return BadRequest(string.Format(Resources.input, "artistLabel"));

            var result = dbpediaEndpoint.GetGenresByArtist(artistLabel);

            return result == null ? (IHttpActionResult) InternalServerError() : Ok(result);
        }
    }
}

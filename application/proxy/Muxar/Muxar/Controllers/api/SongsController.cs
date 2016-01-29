using System.Web.Http;
using Muxar.BrightStarDb.Endpoints;
using Muxar.EntitiesDto;

namespace Muxar.Controllers.api
{
    public class SongsController : BaseApiController
    {
        private readonly DbpediaEndpoint dbpediaEndpoint;

        public SongsController()
        {
            dbpediaEndpoint = new DbpediaEndpoint();
        }

        /// <summary>
        ///Find dbpedia association of a song and also provide a thumbnail if such exists.
        ///Be aware that not all songs have a dbpedia resource Id!
        ///The result is the Song entity, filled (or not) with missing links.
        /// </summary>
        /// <param name="song"></param>
        /// <returns></returns>
        [HttpPost]
        [Route("api/Songs/AssociateWithDbpedia")]
        public IHttpActionResult AssociateWithDbpedia(SongDto song)
        {
            dbpediaEndpoint.GetSongByNameAndArtist(song);
            return Ok(song);
        }

    }
}

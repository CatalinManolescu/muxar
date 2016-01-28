using System.Threading.Tasks;
using System.Web.Http;

namespace Muxar.Controllers.api
{
    public class AlbumsController : BaseApiController
    {
        [HttpGet]
        [Route("api/Albums/GetAllFromArtist")]
        public async Task<IHttpActionResult> GetAllFromArtist(string artistUri)
        {
            //query dbpedia for albums of artist
            //query local db to check if we already have info about the albums
            return Ok();
        }

    }
}

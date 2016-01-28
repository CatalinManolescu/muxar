using System.Threading.Tasks;
using System.Web.Http;

namespace Muxar.Controllers.api
{
    public class RegionsController : BaseApiController
    {
        [HttpGet]
        [Route("api/Regions/GetByContinent")]
        public async Task<IHttpActionResult> GetByContinent(string continentUri)
        {
            //query dbpedia for artists in continent
            //query local db to check if we already have info about the artists found
            //query echonest to find info about artists and store to local db
            //query echonest for playlist generation
            return Ok();
        }

        [HttpGet]
        [Route("api/Regions/GetByCountry")]
        public async Task<IHttpActionResult> GetByCountry(string countryUri)
        {
            //query dbpedia for artists in country
            //query local db to check if we already have info about the artists found
            //query echonest to find info about artists and store to local db
            //query echonest for playlist generation
            return Ok();
        }
    }
}

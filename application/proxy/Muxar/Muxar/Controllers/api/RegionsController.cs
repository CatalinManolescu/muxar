using System.Threading.Tasks;
using System.Web.Http;
using Muxar.BrightStarDb.Endpoints;

namespace Muxar.Controllers.api
{
    public class RegionsController : BaseApiController
    {
        private readonly DbpediaEndpoint dbpediaEndpoint;
        private readonly EchonestEndpoint echonestEndpoint;

        public RegionsController()
        {
            dbpediaEndpoint = new DbpediaEndpoint();
            echonestEndpoint = new EchonestEndpoint();
        }
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
            dbpediaEndpoint.GetArtistsByCountry(countryUri);
            //query dbpedia for artists in country
            //query local db to check if we already have info about the artists found
            //query echonest to find info about artists and store to local db
            //query echonest for playlist generation
            return Ok();
        }

        [HttpGet]
        [Route("api/Regions/GetCountriesOfEurope")]
        public IHttpActionResult GetCountriesOfEurope()
        {
            var countries = dbpediaEndpoint.GetCountriesOfEurope();
            return Ok(countries);
        }
    }
}

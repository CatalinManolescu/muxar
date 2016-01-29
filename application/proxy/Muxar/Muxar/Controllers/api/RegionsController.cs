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

        /// <summary>
        /// Returns a list of  artists from a country;
        ///function receives a country's label 
        /// 
        /// </summary>
        /// <param name="countryUri"></param>
        /// <returns>A list of aritsts: 
        /// [{
        ///    "Id": "http://dbpedia.org/resource/Byron_(band)",
        ///    "Thumbnail": "http://commons.wikimedia.org/wiki/Special:FilePath/Byron_-_Sarajevo_254.jpg?width=300",
        ///    "Name": "Byron (band)"
        ///  }]
        /// </returns>
        [HttpGet]
        [Route("api/Regions/GetByCountry")]
        public async Task<IHttpActionResult> GetByCountry(string countryUri)
        {
            var artists = dbpediaEndpoint.GetArtistsByCountry(countryUri);
            //query dbpedia for artists in country
            //query local db to check if we already have info about the artists found
            //query echonest to find info about artists and store to local db
            //query echonest for playlist generation
            return Ok(artists);
        }

        /// <summary>
        /// Get a list with all countries of europe, their Uri identifier and thumbnail
        /// ordered alphabetically
        /// </summary>
        /// <returns>
        /// Example response:
        /// [{
        ///    "Id": "http://dbpedia.org/resource/Albania",
        ///    "Thumbnail": "http://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Albania.svg?width=300",
        ///    "Name": "Albania"
        ///  }]
        /// </returns>
        [HttpGet]
        [Route("api/Regions/GetCountriesOfEurope")]
        public IHttpActionResult GetCountriesOfEurope()
        {
            var countries = dbpediaEndpoint.GetCountriesOfEurope();
            return Ok(countries);
        }
    }
}

using System.Web.Http;
using Muxar.BrightStarDb.Endpoints;

namespace Muxar.Controllers
{
    public class BandsController : BaseApiController
    {
        private DbpediaEndpoint dbpediaEndpoint;

        public BandsController()
        {
            dbpediaEndpoint = new DbpediaEndpoint();
        }
    }
}

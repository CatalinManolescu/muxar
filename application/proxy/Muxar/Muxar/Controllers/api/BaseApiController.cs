using System.Linq;
using System.Net;
using System.Web.Http;

namespace Muxar.Controllers.api
{
    public class BaseApiController : ApiController
    {
        protected IHttpActionResult ValidationError()
        {
            var errors = ModelState.SelectMany(x => x.Value.Errors.Select(y => y.ErrorMessage + y.Exception));
            return Content(HttpStatusCode.BadRequest, errors);
        }

        protected IHttpActionResult Conflict(string message)
        {
            return Content(HttpStatusCode.Conflict, message);
        }
    }
}

using System.Web.Mvc;

namespace Muxar.Controllers
{
    public class UserController : Controller
    {
        // GET: User
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Intro()
        {
            return View();
        }
    }
}
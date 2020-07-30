using System.Web.Mvc;

namespace ApiLocation.Controllers
{
    public class HomeController : Controller
    {
        // GET
        public ActionResult Index()
        {
            ViewBag.Title = "Home Page";

            return View();
        }
    }
}
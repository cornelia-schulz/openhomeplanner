using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;
using OpenHomePlanner.Models;

namespace OpenHomePlanner.Controllers
{
  public class ApiController : Controller
  {
    private IList<Listing> Listings = new List<Listing>()
    {
      new Listing() { Bedrooms = 1 }
    };


    [HttpGet]
    public JsonResult Search(SearchCriteria searchCriteria)
    {
      var minBedrooms = 0;
      if (searchCriteria.MinBedrooms.HasValue) minBedrooms = searchCriteria.MinBedrooms.Value;

      return Json(Listings.Where(a => a.Bedrooms >= minBedrooms), JsonRequestBehavior.AllowGet);
    }
  }
}
using System.Collections.Generic;
using System.Web.Http;
using ApiLocation.Models;
using ApiLocation.Services;
using System.Web.Http.Cors;

namespace ApiLocation.Controllers
{

    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class LocationsController : ApiController
    {
        private readonly ILocationProvider _locationProvider;
        

        public LocationsController(ILocationProvider locationProvider)
        {
            this._locationProvider = locationProvider;
            
        }

        // GET: Locations
        /**
         * category
         * query
         */
        public List<LocationEntity> Get(string city, int id)
        {
            //check db

            //if not call FourSquare 


            return _locationProvider.GetList(city, id);
        }

    }

}

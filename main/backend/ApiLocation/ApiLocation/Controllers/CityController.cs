using System.Collections.Generic;
using System.Web.Http;
using ApiLocation.Services;
using ApiLocation.Models;
using System.Web.Http.Cors;

namespace ApiLocation.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class CityController : ApiController
    {
        private readonly ICityProvider _cityProvider;

        public CityController(ICityProvider cityProvider)
        {
            this._cityProvider = cityProvider;
        }

        public List<CityEntity> Get()
        {
            return _cityProvider.GetCityList();
        }
    }
}

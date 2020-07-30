using System.Collections.Generic;
using System.Linq;
using ApiLocation.Models;

namespace ApiLocation.Services
{
    public class CityProvider : ICityProvider
    {
        private CityContext cityContext = new CityContext();

        public List<CityEntity> GetCityList()
        {
            List<CityEntity> listCity = cityContext.City.Select(item => item).ToList();
            return listCity;
        }
    }
}
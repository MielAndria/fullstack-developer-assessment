using System.Collections.Generic;
using ApiLocation.Models;

namespace ApiLocation.Services
{
    public interface ICityProvider
    {
        List<CityEntity> GetCityList();
    }
}

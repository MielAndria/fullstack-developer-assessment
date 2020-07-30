using System.Collections.Generic;
using ApiLocation.Models;

namespace ApiLocation.Services
{
    public interface ILocationProvider
    {
        /**
         *
         */
        List<LocationEntity> GetList(string place, int categoryId);
    }
}

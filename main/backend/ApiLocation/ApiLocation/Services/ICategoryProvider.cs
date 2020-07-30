using System.Collections.Generic;
using ApiLocation.Models;

namespace ApiLocation.Services
{
    public interface ICategoryProvider
    {
        List<CategoryEntity> GetCategoryList();
    }
}

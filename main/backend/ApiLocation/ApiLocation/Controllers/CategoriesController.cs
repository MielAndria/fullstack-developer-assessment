using System.Collections.Generic;
using System.Web.Http;
using ApiLocation.Services;
using ApiLocation.Models;
using System.Web.Http.Cors;

namespace ApiLocation.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class CategoriesController : ApiController
    {
        private readonly ICategoryProvider _categoryProvider;

        public CategoriesController(ICategoryProvider categoryProvider)
        {
            this._categoryProvider = categoryProvider;
        }

        public List<CategoryEntity> Get()
        {
            return _categoryProvider.GetCategoryList();
        }
    }
}

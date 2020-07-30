using System.Collections.Generic;
using System.Linq;
using ApiLocation.Models;

namespace ApiLocation.Services
{
    public class CategoryProvider : ICategoryProvider
    {
        private CategoryContext categoryContext = new CategoryContext();

        public List<CategoryEntity> GetCategoryList()
        {
            List<CategoryEntity> listCategory = categoryContext.Categories.Select(item => item).ToList();
            return listCategory;
        }
    }
}
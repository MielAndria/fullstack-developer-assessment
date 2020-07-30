using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;


namespace ApiLocation.Models
{
    public class CategoryContext : DbContext
    {
        public CategoryContext() : base("DefaultConnection")
        {
        }

        public DbSet<CategoryEntity> Categories { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
        }

    }
}
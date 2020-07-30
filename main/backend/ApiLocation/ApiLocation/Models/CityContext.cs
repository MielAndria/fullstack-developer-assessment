using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;

namespace ApiLocation.Models
{
    public class CityContext : DbContext
    {
        public CityContext() : base("DefaultConnection")
        {
        }

        public DbSet<CityEntity> City { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
        }
    }
}
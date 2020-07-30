using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;

namespace ApiLocation.Models
{
    public class LocationContext : DbContext
    {
        public LocationContext() : base("DefaultConnection")
        {
        }

        public DbSet<LocationEntity> Locations { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
        }
    }


}
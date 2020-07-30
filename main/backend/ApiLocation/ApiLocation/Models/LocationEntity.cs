using System;

namespace ApiLocation.Models
{
    public class LocationEntity
    {
        public int Id { get; set; }

        public String LocationId { get; set; }

        public String Name { get; set; }

        public String Adress { get; set; }

        public String Image { get; set; }

        public int CategoryId { get; set; }

    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using ApiLocation.Models;
using LocationAppReact.Services.FourSquare;

namespace ApiLocation.Services
{
    public class LocationProvider : ILocationProvider
    {
        FlickrGeo geoFlickr = new FlickrGeo();
        private FourSquareClient fourSquareClient = new FourSquareClient();
        private LocationContext locationContext = new LocationContext();
        private CategoryContext categoryConttext = new CategoryContext();




        private LocationEntity createLocationWithImage(Venue item,int categoryId)
        {
            var picture = geoFlickr.SearchImageFor(item.location.lng, item.location.lat);
            var n = picture.Count;
            Random random = new Random();
            var i = random.Next(0, n);

            return new LocationEntity
            {
                LocationId = item.id,
                Name = item.name,
                Adress = item.location.address +" "+ item.location.city +
                         " " + item.location.postalCode +
                         ", " + item.location.country +  " " + item.location.state,

                Image = picture[i].Medium800Url,
                CategoryId = categoryId
               
            };
        }

        public List<LocationEntity> GetList(string place, int categoryId)
        {
            var myCategory = categoryConttext.Categories.Where(category => category.Id.Equals(categoryId)).First();

            List<Venue> result = fourSquareClient.SearchVenues(place, myCategory.Name);
            List<LocationEntity> listLocation = new List<LocationEntity>();

            foreach (var item in result)
            {
                var list = locationContext.Locations.Where(location => location.LocationId.Equals(item.id)).ToArray();
                LocationEntity currentLocation;

                if (list.Length == 0)
                {
                    currentLocation = createLocationWithImage(item, categoryId);
                    locationContext.Locations.Add(currentLocation);
                    locationContext.SaveChanges();
                }
                else
                {
                    currentLocation = list[0];
                }
                listLocation.Add(currentLocation);
            }
            return listLocation;
        }
    }
}
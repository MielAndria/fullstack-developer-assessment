using System;
using FlickrNet;

namespace ApiLocation.Services
{
    public class FlickrGeo
    {
        public PhotoCollection SearchImageFor(Double lon, Double Lat)
        {
            Flickr flickr = new Flickr("db70f3731dc2cbd222897fb1c9da5311");
            PhotoSearchOptions options = new PhotoSearchOptions { Longitude = lon, Latitude = Lat };
            PhotoCollection photos = flickr.PhotosSearch(options);
            return photos;

        }
    }
}
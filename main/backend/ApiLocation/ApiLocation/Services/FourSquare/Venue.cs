using Newtonsoft.Json;


namespace LocationAppReact.Services.FourSquare
{
    public class Venue
    {
        /// A unique string identifier for this venue.
        [JsonProperty("id")]
        public string id
        {
            get;
            set;
        }

        /// The best known name for this venue.
        [JsonProperty("name")]
        public string name
        {
            get;
            set;
        }


        ///  An object containing none, some, or all of address (street address), formattedAddress, crossStreet, city, state, postalCode, country, lat, lng, and distance. All fields are strings, except for lat, lng, and distance. Distance is measured in meters. 
        ///  Some venues have their locations intentionally hidden for privacy reasons (such as private residences). If this is the case, the parameter isFuzzed will be set to true, and the lat/lng parameters will have reduced precision. 
        [JsonProperty("location")]
        public Location location
        {
            get;
            set;
        }
    }
}

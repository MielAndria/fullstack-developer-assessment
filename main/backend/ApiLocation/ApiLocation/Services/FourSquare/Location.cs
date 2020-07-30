using Newtonsoft.Json;

namespace LocationAppReact.Services.FourSquare
{ 
    public class Location
    {
        [JsonProperty("address")]
        public string address
        {
            get;
            set;
        }


        [JsonProperty("city")]
        public string city
        {
            get;
            set;
        }

        [JsonProperty("state")]
        public string state
        {
            get;
            set;
        }

        [JsonProperty("postalCode")]
        public string postalCode
        {
            get;
            set;
        }

        [JsonProperty("country")]
        public string country
        {
            get;
            set;
        }

        [JsonProperty("lat")]
        public double lat
        {
            get;
            set;
        }

        [JsonProperty("lng")]
        public double lng
        {
            get;
            set;
        }

        [JsonProperty("distance")]
        public int distance
        {
            get;
            set;
        }

        [JsonProperty("cc")]
        public string cc
        {
            get;
            set;
        }

        [JsonProperty("formattedAddress")]
        public string[] formattedAddress
        {
            get;
            set;
        }
    }
}
using LocationAppReact.Services.FourSquare;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web;

namespace ApiLocation.Services
{
    public class FourSquareClient
    {
        private const string clientId = "2Z3X11A0PNCZCJ401VK4JKTNVRK4HTT3SSOID53QP5R2VQ3D";
        private const string clientSecret = "HDKRL2JW23EYOKYO0F4T0SONKTNSINCKMF5UXLI1MAJXYQN0";
        private const string version = "20190425";
        private const string apiURL = "https://api.foursquare.com/v2";
        private const string searchURL = apiURL+"/venues/search?client_id={0}&client_secret={1}&v={2}&near={3}&query={4}";

        
        public List<Venue> SearchVenues(string location, string query)
        {
            string url = String.Format(searchURL, clientId, clientSecret, version, location, query);
            var webClient = new WebClient();
            string data = webClient.DownloadString(url);
            JObject response = JObject.Parse(data);
            return JsonConvert.DeserializeObject<List<Venue>>(response["response"]["venues"].ToString());
        }
        
    }
}
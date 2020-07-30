using System;
using System.Net.Http;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace UnitTestApiLocation
{
    [TestClass]
    public class HttpResponseTests
    {
        private HttpClient client;
        private HttpResponseMessage resp;


        [setUp]
        public void SetUP()
        {
            clientw HttpClient();
            client.BaseAddress = new Uri(ConfigurationManager.AppSettings["serviceBaseUri"]);
            response = client.GetAsync("locations/");
        }

    [TestMethod]
        public void TestMethod1()
        {
        }
    }
}

using Xunit;
using System.Web.Http.Results;
using ApiLocation.Controllers;
using ApiLocation.Models;
using ApiLocation.Services;

namespace ApiLocation.Test
{
    public class TestController
    {
        LocationsController _controller;
        LocationProvider _locationProvider;

        public TestController()
        {

            _locationProvider = new LocationProvider();
            _locationProvider.GetList("Paris", 7);
            _controller = new LocationsController(_locationProvider);
        }

        [Fact]
        public void Get_When_Called_Returns_OkResult()
        {
            //Act
            var OkResult = _controller.Get("Paris", 7);

            //Asssert
            Assert.IsType<OkResult>(OkResult);

        }
    }
}

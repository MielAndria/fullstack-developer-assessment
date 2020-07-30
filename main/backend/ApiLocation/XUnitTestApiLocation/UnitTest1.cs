using Xunit;
using System.Net.Http;
using ApiLocation.Controllers;
using ApiLocation.Models;
using ApiLocation.Services;
using Moq;
using System.Collections.Generic;

namespace XUnitTestApiLocation
{
    public class UnitTest1
    {
        [Fact]
        public void GetLocation()
        {
            var loc = new List<LocationEntity>()
            {
                new LocationEntity {
                 Id=211,
                 LocationId = "4c00046cc30a2d7fbeda111d",
                 Name = "Parvis Notre-Dame — Place Jean-Paul II",
                 Adress = "Parvis Notre-Dame Paris 75004, France ÃŽle-de-France",
                 Image = "https=//farm66.staticflickr.com/65535/50154199987_62855f30e1_z.jpg",
                 CategoryId = 8
                }
            };

            var valueMock = new Mock<ILocationProvider>();
            valueMock.Setup(s=> s.GetList("paris",8))
                    .Returns(loc);

            var controller = new LocationsController(valueMock.Object);

            //Assert
            var values = controller.Get("paris", 8);

            Assert.Single(values);
        }
    }
}

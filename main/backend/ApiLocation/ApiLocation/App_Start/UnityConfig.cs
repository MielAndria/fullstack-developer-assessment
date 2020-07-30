using ApiLocation.Services;
using System.Web.Http;
using Unity;
using Unity.WebApi;

namespace ApiLocation
{
	public static class UnityConfig
	{
		public static void RegisterComponents()
		{
			var container = new UnityContainer();

			// register all your components with the container here
			container.RegisterType<ILocationProvider, LocationProvider>();
			container.RegisterType<ICategoryProvider, CategoryProvider>();
			container.RegisterType<IUserProvider, UserProvider>();
			container.RegisterType<ICityProvider, CityProvider>();

			GlobalConfiguration.Configuration.DependencyResolver = new UnityDependencyResolver(container);
		}
	}
}
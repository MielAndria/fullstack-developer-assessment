using System.Collections.Generic;
using System.Web.Http;
using ApiLocation.Services;
using ApiLocation.Models;

using RouteAttribute = System.Web.Http.RouteAttribute;
using HttpPostAttribute = System.Web.Mvc.HttpPostAttribute;
using System.Web.Http.Cors;

namespace ApiLocation.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class UsersController : ApiController
    {
        private readonly IUserProvider _userProvider;
        private UserContext userContext = new UserContext();

        public UsersController(IUserProvider userProvider)
        {
            this._userProvider = userProvider;
        }
        public List<UserEntity> Get()
        {
            return _userProvider.GetUserList();
        }

        [HttpPost]
        public IHttpActionResult SaveUser( [FromBody] UserEntity user)
        {
            userContext.users.Add(user);
            userContext.SaveChanges();
            return Ok(user);
        }
    }
}

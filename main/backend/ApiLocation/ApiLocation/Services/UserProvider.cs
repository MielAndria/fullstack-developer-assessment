using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using ApiLocation.Models;


namespace ApiLocation.Services
{
    public class UserProvider : IUserProvider
    {
        private UserContext userContext = new UserContext();

        public List<UserEntity> GetUserList()
        {
            List<UserEntity> listUser = userContext.users.Select(item => item).ToList();
            return listUser;
        }

    }
}
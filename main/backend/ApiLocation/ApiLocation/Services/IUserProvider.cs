using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using ApiLocation.Models;

namespace ApiLocation.Services
{
    public interface IUserProvider
    {
        List<UserEntity> GetUserList();
    }
}
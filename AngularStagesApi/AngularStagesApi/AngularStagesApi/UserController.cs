using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using AngularStagesDLL.Users;

namespace AngularStagesApi
{
    [Route("api/User")]
    public class UserController : Controller
    {
        [HttpGet]
        public List<User> Get()
        {
            UserDAO userDAO = new UserDAO();
            return userDAO.GetUsers();
        }
        [HttpPost]
        public List<User> Post([FromBody] List<User> listaUsuarios)
        {
                UserDAO userDAO = new UserDAO();
                userDAO.SaveUsers(listaUsuarios);
                return listaUsuarios;
        }

    }
}

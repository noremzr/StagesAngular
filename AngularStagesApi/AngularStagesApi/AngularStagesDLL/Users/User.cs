using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;

namespace AngularStagesDLL.Users
{
    [JsonObject()]
    public class User
    {
        [JsonProperty()]
        public string UserName { get; set; }
        [JsonProperty()]
        public string Password { get; set; }
        [JsonProperty()]
        public string Email { get; set; }
        [JsonProperty()]
        public string Name { get; set; }

        [JsonConstructor()]
        public User():this(string.Empty,string.Empty,string.Empty,string.Empty) { }

        public User(string userName, string password, string email, string nome)
        {
            this.UserName = userName;
            this.Password = password;
            this.Email = email;
                this.Name= nome;
        }
    }
}

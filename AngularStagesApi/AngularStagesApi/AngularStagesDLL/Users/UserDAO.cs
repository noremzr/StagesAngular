using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AngularStagesDLL.Users
{
    public class UserDAO
    {

        public List<User> GetUsers() {
            List<User> users = new List<User>();
            users.Add(new User("aless", "1234", "ale@gmail.com", "Alessandro"));
            users.Add(new User("joao", "1234", "joao@gmail.com", "João"));
            users.Add(new User("pedro", "1234", "pedro@gmail.com", "Pedro"));
            users.Add(new User("chico", "1234", "chico@gmail.com", "Chico"));
            //using (var db = new Context())
            //{
            //    users = db.Users
            //        .ToList();
            //}
            return users;
        }

        public void SaveUsers(List<User> listaUsuarios) {
            //RemoveAllUsers();
            //foreach (User user in listaUsuarios) { 
            //using (var db = new Context())
            //    {
            //    db.Users.Add(user);
            //    db.SaveChanges();
            //    }
            //}
        }

        private void RemoveAllUsers() { 
            using (var db = new Context()) {
                foreach (var item in db.Users)
                {
                    db.Users.Remove(item);
                }
                db.SaveChanges();
            }

    }

}
}

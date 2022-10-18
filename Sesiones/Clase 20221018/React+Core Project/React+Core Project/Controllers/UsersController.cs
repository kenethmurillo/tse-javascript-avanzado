using Microsoft.AspNetCore.Mvc;

namespace React_Core_Project.Controllers
{
    [ApiController]
    public class UsersController : ControllerBase
    {

        private readonly ILogger<UsersController> _logger;

        static readonly Models.IUserRepository repository = new Models.UserRepository();

        public UsersController(ILogger<UsersController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        [Route("api/users")]
        public IEnumerable<Models.UserModel> GetAllUsers()
        {
            return repository.GetAll();
        }

        [HttpPost]
        [Route("api/user")]
        [Consumes("application/json")]
        public Models.UserModel PostUser(Models.UserModel item)
        {
            return repository.Add(item);
        }
        

    }
}

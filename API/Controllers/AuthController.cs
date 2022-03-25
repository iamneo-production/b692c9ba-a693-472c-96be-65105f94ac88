using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using API.Data;
using API.Entities;
using System.Threading.Tasks;

namespace WebApp.Controllers
{
    [Route("")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly DataContext _context;
            public AuthController(DataContext context)
            {
                  _context = context;
            }
            
            [HttpPost("user/login")]
            public async Task<IActionResult> IsUserPresent([FromBody] Login data)
            {
                  var user = await _context.Users.FindAsync(data.email);

                  if (user != null && data.email.Equals(user.email) && data.password.Equals(user.password))
                  {
                        if (user.userRole.Equals("admin"))
                        {
                              return Ok(new { StatusCode = 200, Message = "Admin Authenticated", Allowed = true, userRole = "admin", User = user.username, Email = user.email });
                        }
                        else if (user.userRole.Equals("user"))
                        {
                              return Ok(new { StatusCode = 200, Message = "User Authenticated", Allowed = true, userRole = "user", User = user.username, Email = user.email });
                        }
                  }
                  return BadRequest(new { StatusCode = 400, Message = "User Not Available", Allowed = false });
            }


            [HttpPost("user/signup")]
            public async Task<IActionResult> saveUser(User data)
            {
                  var user = await _context.Users.FindAsync(data.email);

                  if (user == null)
                  {
                        await _context.Users.AddAsync(data);
                        _context.SaveChanges();

                        return Ok(new { StatusCode = 200, Message = "User Added", Allowed = true });
                  }
                  return BadRequest(new { StatusCode = 400, Message = "Already a User Available", Allowed = false });
            }

            [HttpPost("admin/login")]
            public IActionResult isAdminPresent([FromBody] Login data)
            {
                  var user = _context.Users.Find(data.email);

                  if (user != null && (data.email.Equals(user.email) && data.password.Equals(user.password)))
                  {
                        return Ok(new { StatusCode = 200, Message = "Admin Authenticated", Allowed = true } );
                  }
                  return BadRequest(new { StatusCode = 400, Message = "Admin Not Found", Allowed = false });

            }


            [HttpPost("admin/signup")]

            public IActionResult saveAdmin(User data)
            {
                  var user = _context.Users.Find(data.email);

                  if (user == null)
                  {
                        _context.Users.Add(data);

                        _context.Admins.Add(new Admin { email = data.email, 

                            password = data.password , mobileNumber = data.mobileNumber , userRole = data.userRole});

                        return Ok(new { StatusCode = 200, Message = "Admin Added SuccessFully" });
                  }

                  return BadRequest(new { StatusCode = 400, Message = "Admin Already Avaliable" });

            }
    }
}

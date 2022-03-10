using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
//using WebApp.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace WebApp.Controllers
{
    [Route("")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        //private readonly AirnetContext _airnetContext;
        private readonly DataContext _context;
        public AuthController(DataContext context){
            _context = context;
        }
        [HttpPost("user/login")]
        public IActionResult IsUserPresent([FromBody] Login data)
        {
            var user = _context.Users.Find(data.email);
            
            if (user != null && data.email.Equals(user.email) && data.password.Equals(user.password))
            {
                return Ok(new { StatusCode = 200, Message = "User Authenticated", Allowed = true , User =  user.username});

            }
            return BadRequest(new { StatusCode = 400 , Message = "User Not Available", Allowed = false });
        }


        [HttpPost("user/signup")]
        public IActionResult saveUser(User data)
        {
            var user = _context.Users.Find(data.email);
            
            if (user == null)
            {
                _context.Users.Add(data);
                
                _context.SaveChanges();
                
                return Ok(new { StatusCode = 200, Message = "User Added"});
            }
            return BadRequest(new { StatusCode = 400 , Message = "Already a User Available" });
        }




        [HttpPost("admin/login")]
        public IActionResult isAdminPresent([FromBody] Login data)
        {
            var user = _context.Users.Find(data.email);
            //  && user.UserRole.Equals("admin")
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

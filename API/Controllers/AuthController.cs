using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using API.Data;
using API.Entities;
using System.Threading.Tasks;
using System.Text.Json;
using System.Diagnostics;
using System;

using Microsoft.Extensions.Configuration;
using System.Data.SqlClient;
using System.Data;


#nullable disable

namespace WebApp.Controllers
{
    [Route("")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly DataContext _context;
        public AuthController(DataContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }

        [HttpPost("user/login")]
        public JsonResult IsUserPresent(Login data)
        {
            string checkQuery = @"select count(*) from dbo.Users where
                   email='" + data.email + @"' and password='" + data.password + @"'";
            string sqlDataSource = _configuration.GetConnectionString("DefaultConnection");
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand checkCommand = new SqlCommand(checkQuery, myCon))
                {
                    int records = (int)checkCommand.ExecuteScalar();
                    if (records == 0)
                    {
                        myCon.Close();
                        return new JsonResult("User is not available");

                    }
                    else
                    {
                        string query = @"select * from dbo.Users where
                                    email='" + data.email + @"' and password='" + data.password + @"'
                                    ";
                        DataTable table = new DataTable();
                        //string sqlDataSource = _configuration.GetConnectionString("DefaultConnection");
                        SqlDataReader myReader;
                        using (SqlCommand myCommand = new SqlCommand(query, myCon))
                        {
                            myReader = myCommand.ExecuteReader();
                            table.Load(myReader);
                            myReader.Close();
                            myCon.Close();

                        }

                        return new JsonResult(table);
                    }

                }

            }

        }

        //Entity framework login code
        // public async Task<IActionResult> IsUserPresent([FromBody] Login data)
        // {

        //       var user = await _context.Users.FindAsync(data.email);

        //       Console.WriteLine(user.email);
        //       Console.WriteLine(user.password);

        //       if (user != null && data.email.Equals(user.email) && data.password.Equals(user.password))
        //       {
        //             Console.WriteLine("if loop working");
        //             if (user.userRole.Equals("admin"))
        //             {
        //                   Console.WriteLine("Admin if is working");

        //                   return Ok(new { StatusCode = 200, Message = "Admin Authenticated", Allowed = true, userRole = "admin", User = user.username, Email = user.email });
        //             }
        //             else if (user.userRole.Equals("user"))
        //             {
        //                   Console.WriteLine("admin if else is working");
        //                   return Ok(new { StatusCode = 200, Message = "User Authenticated", Allowed = true, userRole = "user", User = user.username, Email = user.email });
        //             }
        //       }
        //       return BadRequest(new { StatusCode = 400, Message = "User Not Available", Allowed = false });
        // }


        [HttpPost("user/signup")]
        public JsonResult saveUser(User data)
        {
            string checkQuery = @"select count(*) from dbo.Users where
                   email='" + data.email + @"'";
            string sqlDataSource = _configuration.GetConnectionString("DefaultConnection");
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand checkCommand = new SqlCommand(checkQuery, myCon))
                {
                    int records = (int)checkCommand.ExecuteScalar();
                    if (records != 0)
                    {
                        myCon.Close();
                        return new JsonResult("User is already available");

                    }
                    else
                    {
                        string usernameQuery = @"select count(*) from dbo.Users where
                   username='" + data.username + @"'";
                        using (SqlCommand checkusernamecommand = new SqlCommand(usernameQuery, myCon))
                        {
                            int userRecord = (int)checkusernamecommand.ExecuteScalar();
                            if (userRecord != 0)
                            {
                                myCon.Close();
                                return new JsonResult("Username already available");
                            }
                            else
                            {
                                string signupQuery = @" insert into dbo.Users values(
                                    '" + data.email + @"','" + data.password + @"','" + data.username + @"',
                                    '" + data.mobileNumber + @"','" + data.userRole + @"'
                                )";
                                DataTable table = new DataTable();
                                SqlDataReader myReader;
                                using (SqlCommand myCommand = new SqlCommand(signupQuery, myCon))
                                {
                                    myReader = myCommand.ExecuteReader();
                                    table.Load(myReader);
                                    myReader.Close();
                                    myCon.Close();

                                }

                                return new JsonResult("User successfully added");

                            }
                        }
                    }

                }

            }

        }


        //Signup Entity code
        // public async Task<IActionResult> saveUser(User data)
        // {
        //     var user = await _context.Users.FindAsync(data.email);

        //     if (user == null)
        //     {
        //         await _context.Users.AddAsync(data);
        //         _context.SaveChanges();

        //         return Ok(new { StatusCode = 200, Message = "User Added", Allowed = true });
        //     }
        //     return BadRequest(new { StatusCode = 400, Message = "Already a User Available", Allowed = false });
        // }

        [HttpPost("admin/login")]
        public IActionResult isAdminPresent([FromBody] Login data)
        {
            var user = _context.Users.Find(data.email);

            if (user != null && (data.email.Equals(user.email) && data.password.Equals(user.password)))
            {
                return Ok(new { StatusCode = 200, Message = "Admin Authenticated", Allowed = true });
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

                _context.Admins.Add(new Admin
                {
                    email = data.email,

                    password = data.password,
                    mobileNumber = data.mobileNumber,
                    userRole = data.userRole
                });

                return Ok(new { StatusCode = 200, Message = "Admin Added SuccessFully" });
            }

            return BadRequest(new { StatusCode = 400, Message = "Admin Already Avaliable" });

        }
    }
}

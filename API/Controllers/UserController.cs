using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Data.SqlClient;
using System.Data;
using Microsoft.AspNetCore.Hosting;
using System.IO;
using API.Entities;

namespace WebApp.Controllers
{
    [Route("[controller]/")]
    [ApiController]
    public class UserController : Controller
    {
        private readonly IConfiguration  _configuration;

        private readonly IWebHostEnvironment _env;


        public UserController(IConfiguration configuration,IWebHostEnvironment env)
        {
            _configuration = configuration;
            _env = env;
        }

        [HttpGet]
        public JsonResult Get()
        {
            string query = @"select * from dbo.academy";
            DataTable table= new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DefaultConnection");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query,myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();

                }
            } 
            return new JsonResult(table);
        }

        [HttpGet("courses/{name}")]

        public JsonResult GetCourses(string name)
        {
            string query = @"select * from dbo.Course where academyname = '"
            +name+@"' ";
            DataTable table= new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DefaultConnection");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query,myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();

                }
            } 
            return new JsonResult(table);
        }

        [HttpGet("../Photos/{name}")]

        public JsonResult GetFile(string name)
        {
            try
            {   
                var httpRequest  = Request.Form;
                var postedFile = httpRequest.Files[0];
                string filename = postedFile.FileName;
                var physicalPath = _env.ContentRootPath +"/Photos/"+ filename;

                using(var stream = new FileStream(physicalPath,FileMode.Create))
                {
                    postedFile.CopyTo(stream);

                }
                return new JsonResult(filename);
            }
            catch(Exception) 
            {
                return new JsonResult("anonymous.png");
            }
        }

        [HttpPost("courses/addEnrollment")]

        public JsonResult enrolled(Enroll e)
        {
            string checkQuery = @"select count(*) from dbo.Enrollment where
            studentName='"+e.studentName+@"'and academyName='"+e.academyName+@"'and courseName='"+e.courseName+@"'
            ";
            string query = @"
            insert into dbo.Enrollment values
            ('"+e.firstName+@"','"+e.lastName+@"','"+e.gender+@"',
            '"+e.fatherName+@"','"+e.motherName+@"','"+e.email+@"',
            '"+Convert.ToInt32(e.age)+@"','"+e.phoneNumber1+@"','"+e.phoneNumber2+@"',
            '"+e.houseno+@"','"+e.streetname+@"','"+e.areaname+@"',
            '"+e.pincode+@"','"+e.statename+@"','"+e.nationality+@"','"+e.studentName+@"',
            '"+e.academyName+@"','"+e.courseName+@"'
            )";
            DataTable table= new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DefaultConnection");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using(SqlCommand checkCommand = new SqlCommand(checkQuery,myCon))
                {
                    int records = (int)checkCommand.ExecuteScalar();
                    Console.WriteLine(e.courseName+" "+e.academyName+" "+e.studentName);
                    Console.WriteLine(records);
                    if(records==0)
                    {
                        using (SqlCommand myCommand = new SqlCommand(query,myCon))
                        {
                            myReader = myCommand.ExecuteReader();
                            table.Load(myReader);
                            myReader.Close();
                            myCon.Close();
                        }
                        return new JsonResult("Successfully Added..!");
                    }
                    else
                    {
                        myCon.Close();
                        return new JsonResult("You are already enrolled this course..!");
                    }
                }            
            } 
            
        }

  
        [HttpGet("enrollcourses")]
        public JsonResult GetEnrollCourse(string name)
        {
            string query = @"select * from dbo.Enrollment where studentName = '"
            +name+@"' ";
            DataTable table= new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DefaultConnection");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query,myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();

                }
            } 
            return new JsonResult(table);
        }


        [HttpDelete("deleteAdmission/{enrollmentId}")]
        public JsonResult Delete(int enrollmentId)
        {
            string query= @"
                delete from dbo.Enrollment
                 where enrollmentId = '"+enrollmentId+@"' 
            ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DefaultConnection");
            SqlDataReader myReader;
            using(SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using(SqlCommand myCommand = new SqlCommand(query,myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Deleted Successfully");
        }


        [HttpPut("editAdmission/{enrollment}")]

        public JsonResult Update(Enroll e)
        {
            string query = @"update dbo.Enrollment set 
            firstName ='"+e.firstName+@"',lastName = '"+e.lastName+@"',gender = '"+e.gender+@"',
            fatherName = '"+e.fatherName+@"', motherName = '"+e.motherName+@"',email = '"+e.email+@"',
            age = '"+e.age+@"',phoneNumber1='"+e.phoneNumber1+@"',phoneNumber2='"+e.phoneNumber2+@"',
            houseno ='"+e.houseno+@"',streetname = '"+e.streetname+@"',areaname = '"+e.areaname+@"',
            pincode ='"+e.pincode+@"',statename = '"+e.statename+@"',nationality = '"+e.nationality+@"' 
            where enrollmentId='"+e.enrollmentId+@"'
            ";
            Console.WriteLine(e.streetname+" "+e.enrollmentId);
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DefaultConnection");
            SqlDataReader myReader;
            using(SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using(SqlCommand myCommand = new SqlCommand(query,myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Updated Successfully");
        }


        //Comments
        [HttpGet("comments/{academyName}/{courseName}")]
        public JsonResult getComments(string academyName,string courseName)
        {
            string query = @"select studentName,comment from dbo.comments where 
            courseName='"+courseName+@"' and academyName = '"+academyName+@"'
            ";
            DataTable table= new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DefaultConnection");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query,myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();

                }
            } 
            return new JsonResult(table);
        }
        
        [HttpGet("comments/{studentName}/{academyName}/{courseName}")]
        public JsonResult checkComment(string studentName,string academyName,string courseName)
        {
            string query = @"select commentId, comment from dbo.comments where 
            courseName='"+courseName+@"' and academyName = '"+academyName+@"'and 
            studentName='"+studentName+@"'
            ";
            DataTable table= new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DefaultConnection");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query,myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();

                }
            } 
            return new JsonResult(table);
        }

        [HttpPost("comments/addComment/{studentName}/{academyName}/{courseName}")]

        public JsonResult addComment(string studentName,string academyName,string courseName,string comment)
        {
            string query = @"insert into dbo.comments values(
                '"+studentName+@"','"+academyName+@"','"+courseName+@"','"+comment+@"'
            )
            ";
            DataTable table= new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DefaultConnection");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query,myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();

                }
            } 
                return new JsonResult("Added Successfully");
        }

        [HttpPut("comments/editComment/{id}")]

        public JsonResult editComment(int id,string comment)
        {
            string query = @"update dbo.comments set comment = '"+comment+@"' where 
            commentId = '"+id+@"'
            ";
            DataTable table= new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DefaultConnection");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query,myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();

                }
            } 
                return new JsonResult("Updated Successfully");
        }

        [HttpDelete("comments/deleteComment/{id}")]

        public JsonResult deleteComment(int id)
        {
            string query = @"delete from dbo.comments where 
            commentId = '"+id+@"'

            ";
            DataTable table= new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DefaultConnection");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query,myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();

                }
            } 
                return new JsonResult("Deleted Successfully");
        }




        /*
        public IActionResult Index()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View("Error!");
        }*/
    }
}
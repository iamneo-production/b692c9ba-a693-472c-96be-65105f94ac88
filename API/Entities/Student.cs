using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Entities
{
    public class Student
    {
        public int studentId { get; set; }
        public string studentName { get; set; }
        public DateTime studentDOB { get; set; }
        public string address { get; set; }
        public string mobile { get; set; }
        public int Age { get; set; }
    }
}
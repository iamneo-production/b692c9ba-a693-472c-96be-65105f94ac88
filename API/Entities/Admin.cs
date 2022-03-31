using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;
//using System.Data.Entity;

#nullable disable

namespace API.Entities
{
   [Keyless]
    public partial class Admin
    {
        public string email { get; set; }
        public string password { get; set; }
        public long? mobileNumber { get; set; }
        public string userRole { get; set; }
    }
}

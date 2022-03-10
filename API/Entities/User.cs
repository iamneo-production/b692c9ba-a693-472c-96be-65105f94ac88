using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

#nullable disable

namespace API.Entities
{
    [Keyless]
    public partial class User
    {
        public string email { get; set; }
        public string password { get; set; }
        public string username { get; set; }
        public long? mobileNumber { get; set; }
        public string userRole { get; set; }
    }
}

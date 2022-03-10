using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

#nullable disable

namespace API.Entities
{
    [Keyless]
    public partial class Login
    {
        public string email { get; set; }
        public string password { get; set; }
    }
}
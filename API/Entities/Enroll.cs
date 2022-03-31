using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

#nullable enable

namespace API.Entities
{
    public class Enroll
    {
        public int enrollmentId{get; set;}

        public string? firstName {get;set;}

        public string? lastName {get;set;}

        public string? gender {get;set;}

        public string? motherName {get;set;}

        public string? fatherName {get;set;}

        public string? email {get;set;}

        public int age {get;set;}

        public string? phoneNumber1 {get;set;}

        public string? phoneNumber2 {get;set;}

        public string? houseno {get;set;}

        public string? streetname {get;set;}

        public string? areaname {get;set;}

        public string? pincode {get;set;}

        public string? statename {get;set;}

        public string? nationality {get;set;}

        public string? studentName {get;set;}

        public string? academyName {get;set;}

        public string? courseName {get;set;}

    }
}
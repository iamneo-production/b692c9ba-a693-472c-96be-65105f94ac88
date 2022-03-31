using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
#nullable enable

namespace API.Entities
{
    public class Course
    {
        public int courseId {get;set;}

        public string? courseName {get; set;}

        public string? courseDescription {get;set;}

        public string? courseDuration{get;set;}

        public string? instituteName {get;set;}

        public string? courseTiming {get;set;}

    }
}
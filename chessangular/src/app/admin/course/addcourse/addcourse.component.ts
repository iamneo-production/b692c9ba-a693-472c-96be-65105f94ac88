import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent implements OnInit {

  constructor(private service:SharedService) { }
  @Input() course:any;
  courseId!:string;
  coursename!:string;
  duration!:string;
  numberofstudent!:string;
  timing!:string;
  cdescription!:string;
  academyname!:string;
  ngOnInit(): void {
    this.courseId=this.course.courseId;
    this.coursename=this.course.coursename;
    this.duration=this.course.duration;  
    this.numberofstudent=this.course.numberofstudent;  
    this.timing=this.course.timing;  
    this.cdescription=this.course.cdescription;
    this.academyname=this.course.academyname;
  }
  addstudent(){
    var val = {courseId:this.courseId,
                coursename:this.coursename,
                duration:this.duration,
                numberofstudent:this.numberofstudent,
                timing:this.timing,
                cdescription:this.cdescription,
                academyname:this.academyname
              };
    
    this.service.addcourse(val).subscribe(res=>{
      alert(res.toString());
    });
    
  }

  updatestudent(){
    var val = {courseId:this.courseId,
      coursename:this.coursename,
      duration:this.duration,
      numberofstudent:this.numberofstudent,
      timing:this.timing,
      cdescription:this.cdescription,
    academyname:this.academyname};
    this.service.updatecourse(val).subscribe(res=>{
    alert(res.toString());
    });
  }

}

import { Component,  OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Enrollment } from 'src/app/shared/enrollmentModel';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';




@Component({
  selector: 'app-viewcourses',
  templateUrl: './viewcourses.component.html',
  styleUrls: ['./viewcourses.component.css']
})
export class ViewcoursesComponent implements OnInit {

  searchCourse: string='';
  academyName:any;
  CourseList!:any[];
  isCoursePresent=true;
  sortCourseList:any[]=[];
  enrollForm!:FormGroup;
  courseName:string='';
  commentCourseName:string='';
  commentList:any[] = [];

  username:any;

  constructor(private service:UserService,private router: Router,private _loginService: LoginService) {
    
   }
 

  ngOnInit(): void {
    this.username = this._loginService.usernameClicked;
    this.academyName = this.service.academyNameClicked;
    this.getCourseList(this.academyName);
    this.enrollForm = new FormGroup({
        'firstName': new FormControl(null,[Validators.required,Validators.pattern("^[a-zA-Z ]*$")]),
        'lastName': new FormControl(null,[Validators.required,Validators.pattern("^[a-zA-Z ]*$")]),
        'gender': new FormControl(null,[Validators.required,Validators.pattern("^[a-zA-Z]*$")]),
        'fatherName': new FormControl(null,[Validators.required,Validators.pattern("^[a-zA-Z ]*$")]),
        'motherName': new FormControl(null,[Validators.required,Validators.pattern("^[a-zA-Z ]*$")]),
        'emailId': new FormControl(null, [Validators.required, Validators.email]),
        'age': new FormControl(null, [Validators.required, Validators.pattern("[0-9]{1,3}")]),
        'phoneNumber1': new FormControl(null, [Validators.required, Validators.pattern("[0-9]{10}$")]),
        'houseNo': new FormControl(null, [Validators.required, Validators.pattern("^[/a-zA-Z0-9- ]*$")]),
        'streetName': new FormControl(null, [Validators.required, Validators.pattern("^[a-zA-Z0-9- ]*$")]),
        'areaName': new FormControl(null, [Validators.required, Validators.pattern("^[a-zA-Z0-9- ]*$")]),
        'pincode':  new FormControl(null, [Validators.required, Validators.pattern("[0-9]{6}$")]),
        'state': new FormControl(null,[Validators.required,Validators.pattern("^[a-zA-Z ]*$")]),
        'nationality': new FormControl(null,[Validators.required,Validators.pattern("^[a-zA-Z ]*$")])
    }
    )
  }

  getCourseList(name: string)
  {
    this.service.getCourseList(name).subscribe(data =>
      {
        this.CourseList =data;
        if(this.CourseList.length==0)
        {
          this.isCoursePresent = false;
        }
      }
     );
  }

  sortCourses()
  {
    this.sortCourseList= [];
    for(let data of this.CourseList)
    {
      if(data.coursename.toLowerCase().includes(this.searchCourse.toLowerCase()))
      {
        this.sortCourseList.push(data);
      }
    }
    console.log(this.sortCourseList);
  }

  transferName(name:string)
  {
    this.courseName=name;
  }

  

  enrolling(course:string)
  {
    console.log(course)
      var enrollmentData ={
        firstName:this.enrollForm.get('firstName')?.value,
        lastName:this.enrollForm.get('lastName')?.value,
        gender:this.enrollForm.get('gender')?.value,
        fatherName:this.enrollForm.get('fatherName')?.value,
        motherName:this.enrollForm.get('motherName')?.value,
        email:this.enrollForm.get('emailId')?.value,
        age:this.enrollForm.get('age')?.value,
        phoneNumber1:this.enrollForm.get('phoneNumber1')?.value,
        phoneNumber2:(<HTMLInputElement>document.getElementById('phoneNumber2')).value,
        houseno:this.enrollForm.get('houseNo')?.value,
        streetname:this.enrollForm.get('streetName')?.value,
        areaname:this.enrollForm.get('areaName')?.value,
        pincode:this.enrollForm.get('pincode')?.value,
        statename:this.enrollForm.get('state')?.value,
        nationality:this.enrollForm.get('nationality')?.value,
        studentName:this.username,
        academyName:this.academyName,
        courseName:this.courseName
    }
    
    this.service.addEnrollment(enrollmentData).subscribe(res=>
    {
      alert(res.toString());
    })
  }

  commentTransferName(name:string)
  {
    this.commentCourseName=name;
    this.retrivingComments(this.academyName,this.commentCourseName);
  }

  
  retrivingComments(academyName:string,courseName:string)
  {
    this.service.getComments(academyName,courseName).subscribe(data =>
      {
        this.commentList=data;
      }
    )
  }
}




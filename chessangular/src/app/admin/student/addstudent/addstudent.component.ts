import { Component, OnInit , Input} from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {

  constructor( private service:SharedService) { }

  @Input() std:any;
  studentId!: string;
  firstname!:string;
  mobilenumber!:string;
  enrolledcourse!:string;
  email!:string;

  ngOnInit(): void {
    this.studentId=this.std.studentId;
    this.firstname=this.std.firstname;
    this.mobilenumber=this.std.mobilenumber;
    this.email=this.std.email;
    this.enrolledcourse=this.std.enrolledcourse;
  }
  addstudent(){
    var val = {studentId:this.studentId,
                firstname:this.firstname,
                mobilenumber:this.mobilenumber,
                enrolledcourse:this.enrolledcourse,
                email:this.email
              };
    
    this.service.addstudent(val).subscribe(res=>{
      alert(res.toString());
    });
    
  }

  updatestudent(){
    var val = {studentId:this.studentId,
      firstname:this.firstname,
      mobilenumber:this.mobilenumber,
      enrolledcourse:this.enrolledcourse,
      email:this.email};
    this.service.updatestudent(val).subscribe(res=>{
    alert(res.toString());
    });
  }

}

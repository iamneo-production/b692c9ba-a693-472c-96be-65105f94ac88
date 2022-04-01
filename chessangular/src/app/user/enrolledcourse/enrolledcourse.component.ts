import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-enrolledcourse',
  templateUrl: './enrolledcourse.component.html',
  styleUrls: ['./enrolledcourse.component.css']
})
export class EnrolledcourseComponent implements OnInit {

  enrollCourses: any[] = [];
  editData!: any;
  viewData!: any;
  feedbackData!: any;
  editModalStatus = false;
  viewModalStatus = false;
  editFormGroup!: FormGroup;
  route!: any;
  feedbackResults: any[] = [];
  newFeedback: any;
  editFeedback: any;
  editOption: boolean = true;
  addCommentButton = false;
  updateCommentButton = false;
  username: any;


  constructor(private service: UserService, private router: Router, private _loginService: LoginService) {
    this.username = this._loginService.usernameClicked;

  }
  ngOnInit(): void {

    this.username = this._loginService.usernameClicked;
    console.log(this.username);
    this.getEnrollCourse(this.username);
    console.log(this.enrollCourses);
  }
  getEnrollCourse(name: string) {
    this.service.getEnrollCourses(name).subscribe(data => {
      this.enrollCourses = data;
    });
  }

  deleteEnrollCourse(id: number) {
    this.service.deleteEnrollCourse(id).subscribe(res => {
      alert(res.toString() + "\n Relaod to update your enrolled courses");
      // window.location.reload();
    })
  }

  editModal(data: any) {
    this.editModalStatus = true;
    this.editData = data;

    this.editFormGroup = new FormGroup({
      'firstName': new FormControl(null, [Validators.required, Validators.pattern("^[a-zA-Z ]*$")]),
      'lastName': new FormControl(null, [Validators.required, Validators.pattern("^[a-zA-Z ]*$")]),
      'gender': new FormControl(null, [Validators.required, Validators.pattern("^[a-zA-Z]*$")]),
      'fatherName': new FormControl(null, [Validators.required, Validators.pattern("^[a-zA-Z ]*$")]),
      'motherName': new FormControl(null, [Validators.required, Validators.pattern("^[a-zA-Z ]*$")]),
      'emailId': new FormControl(null, [Validators.required, Validators.email]),
      'age': new FormControl(null, [Validators.required, Validators.pattern("[0-9]{1,3}")]),
      'phoneNumber1': new FormControl(null, [Validators.required, Validators.pattern("[0-9]{10}$")]),
      'houseNo': new FormControl(null, [Validators.required, Validators.pattern("^[/a-zA-Z0-9- ]*$")]),
      'streetName': new FormControl(null, [Validators.required, Validators.pattern("^[a-zA-Z0-9- ]*$")]),
      'areaName': new FormControl(null, [Validators.required, Validators.pattern("^[a-zA-Z0-9- ]*$")]),
      'pincode': new FormControl(null, [Validators.required, Validators.pattern("[0-9]{6}$")]),
      'state': new FormControl(null, [Validators.required, Validators.pattern("^[a-zA-Z ]*$")]),
      'nationality': new FormControl(null, [Validators.required, Validators.pattern("^[a-zA-Z ]*$")])
    }
    )

    this.editFormGroup.controls['firstName'].setValue(this.editData.firstName);
    this.editFormGroup.controls['lastName'].setValue(this.editData.lastName);
    this.editFormGroup.controls['gender'].setValue(this.editData.gender);

    this.editFormGroup.controls['fatherName'].setValue(this.editData.fatherName);
    this.editFormGroup.controls['motherName'].setValue(this.editData.motherName);
    this.editFormGroup.controls['emailId'].setValue(this.editData.email);

    this.editFormGroup.controls['age'].setValue(this.editData.age);
    this.editFormGroup.controls['phoneNumber1'].setValue(this.editData.phoneNumber1);
    // if (this.editData.phoneNumber2.length!=0) {
    //   console.log(this.editData.phoneNumber2.length);
    //   this.editFormGroup.controls['phoneNumber2'].setValue(this.editData.phoneNumber2);
    // }

    this.editFormGroup.controls['houseNo'].setValue(this.editData.houseno);
    this.editFormGroup.controls['streetName'].setValue(this.editData.streetname);
    this.editFormGroup.controls['areaName'].setValue(this.editData.areaname);


    this.editFormGroup.controls['pincode'].setValue(this.editData.pincode);
    this.editFormGroup.controls['state'].setValue(this.editData.statename);
    this.editFormGroup.controls['nationality'].setValue(this.editData.nationality);

  }

  viewModal(data: any) {
    this.viewModalStatus = true;
    this.viewData = data;
  }

  updateEnroll() {
    console.log((<HTMLInputElement>document.getElementById('editphoneNumber2')).value);
    var enrollmentData = {
      enrollmentId: this.editData.enrollmentId,
      firstName: this.editFormGroup.get('firstName')?.value,
      lastName: this.editFormGroup.get('lastName')?.value,
      gender: this.editFormGroup.get('gender')?.value,
      fatherName: this.editFormGroup.get('fatherName')?.value,
      motherName: this.editFormGroup.get('motherName')?.value,
      email: this.editFormGroup.get('emailId')?.value,
      age: this.editFormGroup.get('age')?.value,
      phoneNumber1: this.editFormGroup.get('phoneNumber1')?.value,
      phoneNumber2: (<HTMLInputElement>document.getElementById('editphoneNumber2')).value,
      houseno: this.editFormGroup.get('houseNo')?.value,
      streetname: this.editFormGroup.get('streetName')?.value,
      areaname: this.editFormGroup.get('areaName')?.value,
      pincode: this.editFormGroup.get('pincode')?.value,
      statename: this.editFormGroup.get('state')?.value,
      nationality: this.editFormGroup.get('nationality')?.value,
      studentName: this.username,
      academyName: (<HTMLInputElement>document.getElementById('editacademyName')).value,
      courseName: (<HTMLInputElement>document.getElementById('editcourseName')).value
    }
    console.log(enrollmentData);
    this.service.editEnrollCourse(enrollmentData).subscribe(res => {
      alert(res.toString());
      //window.location.reload();
    })
  }

  checkFeedback(data: any) {
    this.feedbackData = data;
    this.service.checkComment(this.username, this.feedbackData.academyName, this.feedbackData.courseName).subscribe(
      res => {
        this.feedbackResults = res;
      }
    )
  }

  addFeedback() {
    if (this.newFeedback == undefined) {
      this.addCommentButton = true;
    }
    else {
      this.service.addComment(this.username, this.feedbackData.academyName, this.feedbackData.courseName, this.newFeedback).subscribe(
        res => {
          alert(res.toString());
          // window.location.reload();
        }
      )
    }

  }

  updateFeedback(id: number) {
    const data = (<HTMLInputElement>document.getElementById('editFeedbackData')).value;
    if (data.length == 0) {
      this.updateCommentButton = true;
    }
    else {
      this.service.editComment(id, data).subscribe(res => {
        alert(res.toString());
      }
      )
    }

  }

  deleteFeedback(id: number) {
    this.service.deleteComment(id).subscribe(res => {
      alert(res.toString());
      // window.location.reload();
    }
    )
  }

  closeModal() {
    this.getEnrollCourse(this.username);

  }

}

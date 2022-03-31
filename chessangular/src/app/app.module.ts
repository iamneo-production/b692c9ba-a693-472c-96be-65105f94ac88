
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
imports: [    RouterModule,  ]
//Auth
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { NgToastModule } from 'ng-angular-popup';


//Admin
import { StudentComponent } from './admin/student/student.component';
import { ViewstudentComponent } from './admin/student/viewstudent/viewstudent.component';
import { AddstudentComponent } from './admin/student/addstudent/addstudent.component';
import { AdminComponent } from './admin/admin.component';
import { CourseComponent } from './admin/course/course.component';
import { ViewcourseComponent } from './admin/course/viewcourse/viewcourse.component';
import { AddcourseComponent } from './admin/course/addcourse/addcourse.component';
import { AcademyComponent } from './admin/academy/academy.component';
import { AddacademyComponent } from './admin/academy/addacademy/addacademy.component';
import { ViewacademyComponent } from './admin/academy/viewacademy/viewacademy.component';
  
//User
import { UserComponent } from './user/user.component';
import { ViewacademyUserComponent } from './user/viewacademy/viewacademy.component';
import { EnrolledcourseComponent } from './user/enrolledcourse/enrolledcourse.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ViewcoursesComponent } from './user/viewcourses/viewcourses.component';
import { searchFilter } from './user/viewacademy/searchFilter.pipe';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SampleComponent } from './auth/sample/sample.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LoginComponent,
    SignupComponent,
    StudentComponent,
    ViewstudentComponent,
    AddstudentComponent,
    AdminComponent,
    CourseComponent,
    ViewcourseComponent,
    AddcourseComponent,
    AcademyComponent,
    AddacademyComponent,
    ViewacademyUserComponent,
    UserComponent,
    ViewacademyComponent,
    EnrolledcourseComponent,
    ViewcoursesComponent,

    SampleComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgToastModule,
    ReactiveFormsModule
    
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }

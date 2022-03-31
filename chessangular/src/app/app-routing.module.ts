
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Auth
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { SampleComponent } from './auth/sample/sample.component';
import { SignupComponent } from './auth/signup/signup.component';
//Admin
import { StudentComponent } from './admin/student/student.component';
import { AdminComponent } from './admin/admin.component';
import { CourseComponent } from './admin/course/course.component';
import { AcademyComponent } from './admin/academy/academy.component';
import { AddstudentComponent } from './admin/student/addstudent/addstudent.component';
import { ViewstudentComponent } from './admin/student/viewstudent/viewstudent.component';
import { AddcourseComponent } from './admin/course/addcourse/addcourse.component';
import { ViewcourseComponent } from './admin/course/viewcourse/viewcourse.component';
import { AddacademyComponent } from './admin/academy/addacademy/addacademy.component';
import { ViewacademyComponent } from './admin/academy/viewacademy/viewacademy.component';
//User
import  { ViewacademyUserComponent } from './user/viewacademy/viewacademy.component';
import  { ViewcoursesComponent } from './user/viewcourses/viewcourses.component';
import  { EnrolledcourseComponent } from './user/enrolledcourse/enrolledcourse.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'auth',component: AuthComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'sample', component: SampleComponent }
    ],
  },
//User
  { path: 'user',component:UserComponent,
  children:[
    {path:'academy',component:ViewacademyUserComponent},
  {path:'enrolledcourses',component:EnrolledcourseComponent},
  {path:'addAdmission',component:ViewcoursesComponent}
  ],
},

  //Admin
  { 
    path: 'admin', 
    component: AdminComponent,
  children: [
    { path: 'student' , component: StudentComponent,
    children: [ 
      { path: 'addstudent', component: AddstudentComponent },
      { path: 'viewstudent', component: ViewstudentComponent },
    ],
  },

  {
    path: 'course',
    component: CourseComponent,
    children: [
      { path: 'addcourse', component: AddcourseComponent },
      { path: 'viewcourse', component: ViewcourseComponent },
    ],
  },

  {
    path: 'academy',
    component: AcademyComponent,
    children: [
      { path: 'addacademy', component: AddacademyComponent},
      { path: 'viewacademy', component: ViewacademyComponent },
    ],
  }
 ]
}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

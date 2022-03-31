import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { EventEmitter } from '@angular/core';
import { Course } from '../shared/courseModel';

@Injectable({
      providedIn: 'root'
})
export class UserService {
      readonly ApiUrl = "https://localhost:5001";

      public academyNameClicked: any;

      courseClicked= new EventEmitter<string>();
      constructor(
            private http: HttpClient,
            public router: Router,
      ) { 
            this.courseClicked.subscribe(
                  (name) => {
                    this.academyNameClicked = name;
                  }
      )
      }
      BaseUrl = "https://localhost:5001/";
      // Parse the CurrentUser From URL
      CurrentUser!: string;
      CurrentUserEmail!: string;

      
  getAcademyList():Observable<any[]>
  {
    return this.http.get<any>(this.ApiUrl+'/user')
  }

  getCourseList(name:string):Observable<Course[]>
  {
    return this.http.get<Course[]>(this.ApiUrl+'/user/courses/'+name)
  }

  addEnrollment(val:any)
  {
    return this.http.post(this.ApiUrl+'/user/courses/addEnrollment',val)
  }

  getEnrollCourses(name:string)
  {
    return this.http.get<any>(this.ApiUrl+'/user/enrollcourses?name='+name);
  }

  deleteEnrollCourse(id:number)
  {
    return this.http.delete(this.ApiUrl+'/user/deleteAdmission/'+id);
  }
  editEnrollCourse(val:any)
  {
    return this.http.put(this.ApiUrl+'/user/editAdmission/'+val.enrollmentId,val);
  }

  getComments(academyName:string,courseName:string)
  {
    return this.http.get<any>(this.ApiUrl+'/user/comments/'+academyName+"/"+courseName);
  }

  checkComment(studentName:string,academyName:string,courseName:string)
  {
    return this.http.get<any>(this.ApiUrl+'/user/comments/'+studentName+"/"+academyName+"/"+courseName);
  }

  addComment(studentName:string,academyName:string,courseName:string,comment:string)
  {
    return this.http.post(this.ApiUrl+'/user/comments/addComment/'+studentName+"/"+academyName+"/"+courseName+"?comment="+comment,comment);
  }

  editComment(commentId:number,comment:string)
  {
    return this.http.put(this.ApiUrl+"/user/comments/editComment/"+commentId+"?comment="+comment,comment);
  }

  deleteComment(commentId:number)
  {
    return this.http.delete(this.ApiUrl+"/user/comments/deleteComment/"+ commentId);
  }

}

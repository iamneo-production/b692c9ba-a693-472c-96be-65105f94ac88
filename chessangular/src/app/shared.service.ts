import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl="https://localhost:5001/";
readonly PhotoUrl = "https://localhost:5001/Photos/";

  constructor(private http:HttpClient) { }


  getacademyList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'admin/academy');
  }

  addacademy(val:any){
    return this.http.post(this.APIUrl+'admin/academy',val);
  }

  updateacademy(val:any){
    return this.http.put(this.APIUrl+'admin/academy',val);
  }

  deleteacademy(val:any){
    return this.http.delete(this.APIUrl+'admin/academy/'+val);
  }


  academyimage(val:any){
    return this.http.post(this.APIUrl+'admin/academy/SaveFile',val);
  }



  getcourseList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'api/course');
  }

  addcourse(val:any){
    return this.http.post(this.APIUrl+'api/course',val);
  }

  updatecourse(val:any){
    return this.http.put(this.APIUrl+'api/course',val);
  }

  deletecourse(val:any){
    return this.http.delete(this.APIUrl+'api/course/'+val);
  }

  getstdList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'api/student');
  }

  addstudent(val:any){
    return this.http.post(this.APIUrl+'api/student',val);
  }

  updatestudent(val:any){
    return this.http.put(this.APIUrl+'api/student',val);
  }

  deletestudent(val:any){
    return this.http.delete(this.APIUrl+'api/student/'+val);
  }

  UploadPhoto(val:any){
    return this.http.post(this.APIUrl+'api/student/SaveFile',val);
  }

}

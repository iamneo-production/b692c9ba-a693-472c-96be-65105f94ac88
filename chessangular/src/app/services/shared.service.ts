import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl="https://localhost:5001/api";
readonly PhotoUrl = "https://localhost:5001/Photos/";

  constructor(private http:HttpClient) { }


  getacademyList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/academy');
  }

  addacademy(val:any){
    return this.http.post(this.APIUrl+'/academy',val);
  }

  updateacademy(val:any){
    return this.http.put(this.APIUrl+'/academy',val);
  }

  deleteacademy(val:any){
    return this.http.delete(this.APIUrl+'/academy/'+val);
  }


  academyimage(val:any){
    return this.http.post(this.APIUrl+'/academy/SaveFile',val);
  }



  getcourseList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/course');
  }

  addcourse(val:any){
    return this.http.post(this.APIUrl+'/course',val);
  }

  updatecourse(val:any){
    return this.http.put(this.APIUrl+'/course',val);
  }

  deletecourse(val:any){
    return this.http.delete(this.APIUrl+'/course/'+val);
  }

  getDepList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/department');
  }

  addDepartment(val:any){
    return this.http.post(this.APIUrl+'/Department',val);
  }

  updateDepartment(val:any){
    return this.http.put(this.APIUrl+'/Department',val);
  }

  deleteDepartment(val:any){
    return this.http.delete(this.APIUrl+'/Department/'+val);
  }
  getstdList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/student');
  }

  addstudent(val:any){
    return this.http.post(this.APIUrl+'/student',val);
  }

  updatestudent(val:any){
    return this.http.put(this.APIUrl+'/student',val);
  }

  deletestudent(val:any){
    return this.http.delete(this.APIUrl+'/student/'+val);
  }


  getEmpList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Employee');
  }

  addEmployee(val:any){
    return this.http.post(this.APIUrl+'/Employee',val);
  }

  updateEmployee(val:any){
    return this.http.put(this.APIUrl+'/Employee',val);
  }

  deleteEmployee(val:any){
    return this.http.delete(this.APIUrl+'/Employee/'+val);
  }


  UploadPhoto(val:any){
    return this.http.post(this.APIUrl+'/Employee/SaveFile',val);
  }

  getAllDepartmentNames():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/Employee/GetAllDepartmentNames');
  }

}

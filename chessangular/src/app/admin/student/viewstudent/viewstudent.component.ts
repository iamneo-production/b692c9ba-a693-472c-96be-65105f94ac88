import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-viewstudent',
  templateUrl: './viewstudent.component.html',
  styleUrls: ['./viewstudent.component.css']
})
export class ViewstudentComponent implements OnInit {

  constructor(private service:SharedService) { }
  studentlist:any=[];
  ModelTitle!:string;
  ActivateAddstudent:boolean=false;
  std:any;

  studentIdFilter:string="";
  studentNameFilter:string="";
  studentListWithoutFilter!: any[];






  ngOnInit(): void {
    this.refreshstdList();
  }
  addClick()
  {
    this.std={
      studentId:0,
      firstname:""
    }
    this.ModelTitle="Add Student";
    this.ActivateAddstudent=true;
  }
  editClick(item: any){
    this.std=item;
    this.ModelTitle="Edit Student";
    this.ActivateAddstudent=true;

  }
  deleteClick(item: any){
    if(confirm('Are you sure??'))
    {
      this.service.deletestudent(item.studentId).subscribe(data=>{
        alert(data.toString());
        this.refreshstdList();
      })
    }
  }
  closeClick(){
    this.ActivateAddstudent=false;
    this.refreshstdList();
  }
  refreshstdList()
  {
    this.service.getstdList().subscribe(data=>{
      this.studentlist=data;
      this.studentListWithoutFilter=data;

    })
  }
  FilterFn()
 {
   var studentIdFilter = this.studentIdFilter;
   var studentNameFilter=this.studentNameFilter;
   this.studentlist = this.studentListWithoutFilter.filter(function (el){
    return el.studentId.toString().toLowerCase().includes(
      studentIdFilter.toString().trim().toLowerCase()
    )&&
    el.firstname.toString().toLowerCase().includes(
      studentNameFilter.toString().trim().toLowerCase()
    )
   });
 } 

}

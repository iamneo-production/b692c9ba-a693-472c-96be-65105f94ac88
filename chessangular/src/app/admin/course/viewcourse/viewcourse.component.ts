import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-viewcourse',
  templateUrl: './viewcourse.component.html',
  styleUrls: ['./viewcourse.component.css']
})
export class ViewcourseComponent implements OnInit {

  constructor(private service:SharedService) { }
  courselist:any=[];

  ModelTitle!:string;
  ActivateAddcourse:boolean=false;
  course:any;

  courseIdFilter:string="";
  courseNameFilter:string="";
  courseListWithoutFilter!:any[];


  ngOnInit(): void {
    this.refreshcourseList();
  }
  addClick()
  {
    this.course={
      courseId:0,
      coursename:""
    }
    this.ModelTitle="Add course";
    this.ActivateAddcourse=true;
  }
  closeClick(){
    this.ActivateAddcourse=false;
    this.refreshcourseList();
  }
  editClick(item: any){
    this.course=item;
    this.ModelTitle="Edit course";
    this.ActivateAddcourse=true;

  }
  deleteClick(item: any){
    if(confirm('Are you sure??'))
    {
      this.service.deletecourse(item.courseId).subscribe(data=>{
        alert(data.toString());
        this.refreshcourseList();
      })
    }
  }
 
  refreshcourseList(){
    this.service.getcourseList().subscribe(data=>{
      this.courselist=data;
      this.courseListWithoutFilter=data;
      
    });
  }

  FilterFn()
 {
   var courseIdFilter = this.courseIdFilter;
   var courseNameFilter=this.courseNameFilter;
   this.courselist = this.courseListWithoutFilter.filter(function (el){
    return el.courseId.toString().toLowerCase().includes(
      courseIdFilter.toString().trim().toLowerCase()
    )&&
    el.coursename.toString().toLowerCase().includes(
      courseNameFilter.toString().trim().toLowerCase()
    )
   });
 } 

}

import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';
@Component({
  selector: 'app-viewacademy1',
  templateUrl: './viewacademy.component.html',
  styleUrls: ['./viewacademy.component.css']
})
export class ViewacademyComponent implements OnInit {
  

  constructor(private service:SharedService) { }

  academylist:any=[];

  ModalTitle!:string;
  ActivateAddEditacademyComp:boolean=false;
  academy:any;

  AcademyNameFilter:string="";
  AcademyListWithoutFilter!:any[];

  ngOnInit(): void {
    this.refreshacademylist();
  }

  addClick(){
    this.academy={
      academyid:0,
      academyname:"",
      academydescription:"",
      academylocation:"",
      academycontactno:"",
      academyemail:"",
      academyimage:"anonymous.png"
    }
    this.ModalTitle="Add Academy";
    this.ActivateAddEditacademyComp=true;

  }

  editClick(item: any){
    console.log(item);
    this.academy=item;
    this.ModalTitle="Edit Academy";
    this.ActivateAddEditacademyComp=true;
  }

  deleteClick(item: any){
    if(confirm('Are you sure??')){
      this.service.deleteacademy(item.academyid).subscribe(data=>{
        alert(data.toString());
        this.refreshacademylist();
      })
    }
   
  }

  closeClick(){
    this.ActivateAddEditacademyComp=false;
    this.refreshacademylist();
  }


  refreshacademylist(){
    this.service.getacademyList().subscribe(data=>{
      this.academylist=data;
      this.AcademyListWithoutFilter=data;
    });
  }

  FilterFn()
 {
   
   var AcademyNameFilter=this.AcademyNameFilter;
   this.academylist = this.AcademyListWithoutFilter.filter(function (el){
    return el.academyname.toString().toLowerCase().includes(
      AcademyNameFilter.toString().trim().toLowerCase()
    )
   });
 } 

}

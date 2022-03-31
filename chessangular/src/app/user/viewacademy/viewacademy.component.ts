import { Component, OnInit } from '@angular/core';
import { Institute } from 'src/app/shared/academyModel';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-viewacademy',
  templateUrl: './viewacademy.component.html',
  styleUrls: ['./viewacademy.component.css']
})
export class ViewacademyUserComponent implements OnInit {

  searchAcademy!:string;
  constructor(private service:UserService) { }

  academyName:any;
  AcademyList!: Institute[];
  CourseList:any[]| undefined;
  sortAcademyList:Institute[] =[];
  photoUrls!:any[]
  // sortAcademyList:Institute[] | undefined;
 
  ngOnInit(): void {
    this.refreshAcademies();
    this.searchAcademy='';
    console.log(this.AcademyList);
  }

  
  refreshAcademies()
  {
    this.service.getAcademyList().subscribe(data =>
      {
        this.AcademyList = data;
      });
  }



  getId(name:string)
  {
    this.academyName=name;
    console.log(name);
    this.service.courseClicked.emit(this.academyName);
  }


  sortAcadimies()
  {
    this.sortAcademyList= [];
    for(let data of this.AcademyList)
    {
      if(data.academyname.toLowerCase().includes(this.searchAcademy.toLowerCase()))
      {
        this.sortAcademyList.push(data);
      }
    }
    console.log(this.sortAcademyList);
  }
}

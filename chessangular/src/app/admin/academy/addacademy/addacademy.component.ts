import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-addacademy',
  templateUrl: './addacademy.component.html',
  styleUrls: ['./addacademy.component.css']
})
export class AddacademyComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() academy: any;
  academyid!: string;
  academyname!: string;
  academydescription!: string;
  academyimage!: string;
  PhotoFilePath!: string;
  academylocation!:string;
  academycontactno!:string;
  academyemail!:string;



  ngOnInit(): void {
    this.academyid=this.academy.academyid;
    this.academydescription=this.academy.academydescription;
    this.academyname=this.academy.academyname;
    this.academyimage=this.academy.academyimage;
    this.academylocation=this.academy.academylocation;
    this.academycontactno=this.academy.academycontactno;
    this.academyemail=this.academy.academyemail;
    console.log(this.academy.academyemail);
    console.log(this.academy.academycontactno);
    console.log(this.academy.academylocation);
    


  }



  addAcademy() {
    var val = {
      academyid: this.academyid,
      academyname: this.academyname,
      academydescription: this.academydescription,

      academyimage: this.academyimage,
      academylocation: this.academylocation,
      academycontactno:this.academycontactno,
      academyemail:this.academyemail
    };

    this.service.addacademy(val).subscribe(res => {
      alert(res.toString());
    });
  }

  updateAcademy() {
    var val = {
      academyid: this.academyid,
      academyname: this.academyname,
      academydescription: this.academydescription,
      academyimage:this.academyimage,
      academylocation: this.academylocation,
      academycontactno:this.academycontactno,
      academyemail:this.academyemail,
      

      PhotoFileName: this.academyimage
    };

    this.service.updateacademy(val).subscribe(res => {
      alert(res.toString());
    });
  }


  uploadPhoto(event: any) {
    var file = event.target.files[0];
    const formData: FormData = new FormData();
    formData.append('uploadedFile', file, file.name);

    this.service.UploadPhoto(formData).subscribe((data: any) => {
      this.academyimage = data.toString();
      this.PhotoFilePath = this.service.PhotoUrl + this.academyimage;
    })
  }


}

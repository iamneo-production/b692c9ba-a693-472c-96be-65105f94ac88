import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private _loginService: LoginService) { }



  ngOnInit(): void {
    
  }
  logout(){
    this._loginService.loginClicked.emit("");
    console.log("working");
    this._loginService.router.navigate(['../auth/login']);
  }

}

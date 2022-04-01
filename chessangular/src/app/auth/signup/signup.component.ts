import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { UserModel } from 'src/app/shared/UserModel';
import { NgToastService } from 'ng-angular-popup';
import { UserService } from 'src/app/services/user.service';
import { ResponseModel } from 'src/app/shared/ResponseModel';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private _loginService : LoginService, private toast: NgToastService, private _userService: UserService) { }

    // Reactive Forms Initilization & Validation
    SignupForm!: FormGroup;
    ngOnInit(): void {
        this.SignupForm = new FormGroup({
            'email': new FormControl(null, [Validators.required, Validators.email]),
            'username' : new FormControl(null, [Validators.required , Validators.pattern("[a-zA-Z0-9_]{8,12}")]),
            'mobileNumber': new FormControl(null, [Validators.required , Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
            'password': new FormControl(null, [Validators.required, Validators.pattern("[a-zA-Z0-9_@#$!?></|+*]{8,16}")]),
            'confirmPass': new FormControl(null, [Validators.required ,Validators.pattern("[a-zA-Z0-9_@#$!?></|+*]{8,16}") ])
        })
    }


    // Checking Match of Passwords
    InvalidPass: boolean = false;
    // Checks On Change If Password and Confirm Password are same
    PassCheck() {
        let pass = this.SignupForm.get('password')?.value;
        let cpass = this.SignupForm.get('confirmPass')?.value;
        console.log(typeof(pass) +"   "+pass.length)
        if(pass.length<=8) {
            this.InvalidPass = false;
        }
        else if(pass.length>=8){
            if(pass.length>= 8 && cpass.length >=8){
                if (pass === cpass) {
                    this.InvalidPass = true;
                }
                else {
                    this.InvalidPass = false;
                }
            }

        }
    }

    /**
     * SignUp and Login Button Actions
     * Get Value from Fields Only if Valid
     */
    auth!: boolean;
    onSubmit() {
        const body : UserModel = { 
            email : this.SignupForm.get('email')?.value,
            password : this.SignupForm.get('password')?.value,
            username : this.SignupForm.get('username')?.value,
            mobileNumber : this.SignupForm.get('mobileNumber')?.value,
            userRole : "user"
        }
        
        // Post the Signup Value in User Model
        
        this._loginService.SignupCheck(body).subscribe({
            next: (data) => {
                if(data.toString()=="User is already available") {
                    this.toast.error({detail: " Signup Failed!!  User Already Available" , duration: 5000});
                }
                else if(data.toString()=="Username already available") {
                    this.toast.error({detail: " Signup Failed!!  UserName Already Available" , duration: 5000});
                }
                else if(data.toString()=="User successfully added") {
                    this.toast.success({detail: "Signup Success!" , duration: 5000 });
                    this._loginService.router.navigate(['auth', 'login']);
                }
            //     this.auth = data.allowed;

            //     if(this.auth) {
            //         this.toast.success({detail: "Signup Success!" , duration: 5000 });
            //         this._loginService.router.navigate(['auth', 'login']);
            //     }
            //     else {
            //         this.toast.error({detail: " Signup Failed!!  User Already Available" , duration: 5000});
            //     }
            //     console.log(this.auth);
            // },
            // error: (err) => {
            //     console.log(err);
            //     this.toast.error({ detail: "An Error Occured!!  May be User Already Available!", duration: 4000 })
            }
            
        });

       /* setTimeout(() => {
            this._loginService.router.navigate(['auth', 'login']);
        }, 100);*/
    }

}

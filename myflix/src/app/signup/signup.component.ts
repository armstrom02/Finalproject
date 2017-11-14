import { Component, OnInit } from '@angular/core';
import {DbconnectService} from '../dbconnect.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor (private createusr : DbconnectService, private router: Router ) { }

  ngOnInit() {
  }
  send(){  
    var userName= (<HTMLInputElement>document.getElementById("Name")).value;
    var Email= (<HTMLInputElement>document.getElementById("Email")).value; 
    var Password= (<HTMLInputElement>document.getElementById("Password")).value; 
    var Dob= (<HTMLInputElement>document.getElementById("Dob")).value;
    var phone= (<HTMLInputElement>document.getElementById("Phone")).value;
    if(userName.length!=0 && Email.length!=0 && Password.length!=0 ){
    var obj={name:userName, email: Email, mobile: phone, dob: Dob, password: Password };
      this.createusr.create_user(obj);
      alert("Signup Succesfull") ;
      this.router.navigate(['/login']);
     
    }
    else alert ("field in empty")
  }
}

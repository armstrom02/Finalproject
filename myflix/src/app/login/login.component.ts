import { Component, OnInit } from '@angular/core';
import{User} from '../user';
import{users} from '../users';
import { Router } from '@angular/router';
import {AppService} from'../app.service';
import {DbconnectService} from '../dbconnect.service';
import { AuthService } from "angular4-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angular4-social-login";
import { SocialUser } from "angular4-social-login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

users: User[];
userdata: any[];
private user: SocialUser;
private loggedIn: boolean;

constructor(private router: Router, private service: AppService, private auth :DbconnectService,private authService: AuthService) { }

signInWithGoogle(): void {
  this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(res=>{
  this.router.navigate(['/productlist']);
  this.service.role=false;
  this.service.user=this.user.name;
  console.log(this.user);});
}

signInWithFB(): void {
  this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then(res=>{
    this.router.navigate(['/productlist']);
    this.service.role=false;
    this.service.user=this.user.name;
    console.log(this.user);});
}

signOut(): void {
  this.authService.signOut();
}


  ngOnInit() {
    this.users=users;
    this.auth.get_all();
    this.auth.get_all_movies();
    this.auth.get_all_tvseries();

    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      
    });
  }

  loginfun(){
  

    var usr : string =(<HTMLInputElement> document.getElementById("Username")).value; 
    var pas : string =(<HTMLInputElement> document.getElementById("password")).value; 

    this.userdata = this.auth.usersdata;
    console.log(this.userdata);
    
if(usr.length!=0&&pas.length!=0){
  for (var i = 0; i < this.userdata.length; i++)
  {
    if (this.userdata[i].name==usr)
    {
      if(this.userdata[i].password==pas)
      {
      this.router.navigate(['/productlist',usr]);
      this.service.role=false;
      this.service.user=usr;
      if(this.userdata[i].admin==true){
        this.service.admin=true;
      }
      else{this.service.admin=false};
      break;
      }
      else alert("Password Incorrect");
      break;
    }
    else{
        if (i==this.userdata.length-1){
        alert("Username Doesn't exist");
        }

    }

   } 
   
  }
  else alert("field id empty");
  }


  }






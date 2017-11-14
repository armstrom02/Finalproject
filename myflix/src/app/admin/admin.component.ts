import { Component, OnInit } from '@angular/core';
import {DbconnectService} from '../dbconnect.service';
import {AppService} from'../app.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public userdata:any[];
  public moviesdata:any[];
  public tvseriesdata:any[];
  
 
  constructor(private service: AppService, private auth :DbconnectService) { }

  ngOnInit() {
    this.userdata = this.auth.usersdata;
    this.moviesdata = this.auth.moviesdata;
    this.tvseriesdata = this.auth.tvseriesdata;
  }

usertable:boolean=false;
moviestable:boolean=false;
tvseriestable:boolean=false;




usr(): void {
  this.userdata = this.auth.usersdata;
  if(this.usertable==false){
  this.usertable=true;
  this.moviestable=false;
  this.tvseriestable=false;}
  else this.usertable=false;
}

movies(): void {
  if(this.moviestable==false){
  this.moviestable=true;
  this.usertable=false;
  this.tvseriestable=false;
}
  else this.moviestable=false;
}

tvseries(): void {
  if(this.tvseriestable==false){
    this.moviestable=false;
    this.usertable=false;  
    this.tvseriestable=true;}
  else this.tvseriestable=false;
}



update(): void {
  var usr : string =(<HTMLInputElement> document.getElementById("update_user")).value; 
  var val : string =(<HTMLInputElement> document.getElementById("update_admin")).value;
  var admin:boolean;
  if (val=="True")
      {admin=true}
    else {admin=false};
  var obj={admin: admin};
  this.auth.update_user(usr,obj).subscribe(res=> {
    this.auth.get_all();
    this.userdata = this.auth.usersdata;
    alert("Changes Saved !!");
    this.usr();
  }); 
}

delete(): void {
  var usr : string =(<HTMLInputElement> document.getElementById("update_user")).value; 
  this.auth.delete_user(usr).subscribe(res=> {
    this.auth.get_all();
    this.userdata = this.auth.usersdata;
    alert("User Deleted !!");
    this.usr();
});
}

create_movies(): void {
  
  var name : string =(<HTMLInputElement> document.getElementById("mname")).value;
  var category : string =(<HTMLInputElement> document.getElementById("mcategory")).value;
  var description : string =(<HTMLInputElement> document.getElementById("mdescription")).value;
  var length : string =(<HTMLInputElement> document.getElementById("mlength")).value;
  var url : string =(<HTMLInputElement> document.getElementById("murl")).value; 
  if(name.length!=0 && category.length!=0 && length.length!=0 && description.length!=0 && url.length!=0 ){
    var obj={name:name, category: category, description:description, length:length, url:url };
      this.auth.create_movies(obj).subscribe(res=> {
        this.auth.get_all_movies();
        this.moviesdata = this.auth.moviesdata;
        alert("Movie Added Succesfully !!");
        this.movies();
    });
     
    }
    else alert ("Field in Empty")
  }


  delete_movies(): void{
    var movie : string =(<HTMLInputElement> document.getElementById("dmname")).value; 
    this.auth.delete_movies(movie).subscribe(res=> {
      this.auth.get_all_movies();
      this.moviesdata = this.auth.moviesdata;
      alert("Movie Deleted !!");
      this.movies();
  });





  }
  
  
  
}
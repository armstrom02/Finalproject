import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { AppService } from './app.service';




@Injectable()
export class DbconnectService {

  public usersdata: any = [];
  public moviesdata: any = [];
  public tvseriesdata: any = [];
  public usr;
  public userdb;


  constructor(private http: Http, private user: AppService) { }




  create_user(user) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    this.http.post('http://localhost:3200/user', user, options).subscribe();
  }

  update_user(user, obj) {
    //alert("working");
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.put('http://localhost:3200/user/' + user, obj, options);
    //alert("working")
  }

  delete_user(user) {

    return this.http.delete('http://localhost:3200/user/' + user);

  }

  get_user(user, password) {
    return this.http.get('http://localhost:3200/user/' + user+"/"+password).map((res: Response) => res.json());
  }


  get_all() {
    this.http.get('http://localhost:3200/user').map((res: Response) => res.json()).subscribe(data => { this.usersdata = data });
    console.log("getall");
  }

  get_all_movies() {
    return this.http.get('http://localhost:3200/movies').map((res: Response) => res.json());
  }

  create_movies(movie) {

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post('http://localhost:3200/movies', movie, options);

  }

  delete_movies(movie) {

    return this.http.delete('http://localhost:3200/movies/' + movie);


  }

  get_all_tvseries() {
   return this.http.get('http://localhost:3200/tvseries').map((res: Response) => res.json());
  }
  addcartdb(order) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    this.http.post('http://localhost:3200/cart', order, options).subscribe();
  }

  get_order() {
    var uname = this.user.checkuser();
    return this.http.get('http://localhost:3200/carts/' + uname).map((res: Response) => res.json());

  }

  delete_order(pdate) {

    return this.http.delete('http://localhost:3200/carts/' + pdate);


  }



}

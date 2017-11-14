import { Injectable } from '@angular/core';

@Injectable()
export class AppService {

  constructor() { }
  role=true;
  user="";
  admin=false;
onCheck(){
  return this.role;
}

checkuser(){
  return this.user;
}

checkadmin(){
  return this.admin;
}
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import {DbconnectService} from '../dbconnect.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {


public tvseriesdata: any=[];

  constructor(private router: Router,private auth :DbconnectService) { }

  ngOnInit() {
    this.auth.get_all_tvseries().subscribe(data => { this.tvseriesdata = data; });
    
  }

  detailfn(product){
    
    this.router.navigate(['/productdetail',product.pname,product.purl,product.pprice]);
    

  }



}

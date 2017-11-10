import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule, Routes } from '@angular/router'

@Component({
  selector: 'app-movieslist',
  templateUrl: './movieslist.component.html',
  styleUrls: ['./movieslist.component.css']
})
export class MovieslistComponent implements OnInit {

  public products:any[]= [
    
        {pname:"Classic desert storm",purl: "https://images-eu.ssl-images-amazon.com/images/S/sgp-catalog-images/boxart_images/a5cf19be-77c0-484f-81e4-641d268e1271-8c312dac-2ba0-4c6d-8fce-7a2de82f6a0f_RGB_SD._UR267,200_FMJPG_.jpg", pprice: 50},
        {pname:'Classic Chrome',purl:'https://royalenfield.com/id-eng/images/data/menu/image10.jpg',pprice:100},
        {pname:'Classic Chrome',purl:'https://royalenfield.com/np/images/data/menu/image1.jpg',pprice:200},
        {pname:'Classic Battle Green',purl:'https://royalenfield.com/ae/images/data/menu/image6.jpg',pprice:250},
        {pname:'Stealth black',purl:'https://royalenfield.com/classicmatte/images/gallery_big/sb6.jpg',pprice:80},
        {pname:'Classic Gun Metal Grey',purl:'https://royalenfield.com/classicmatte/images/gallery_big/gm1.jpg',pprice:45},
        {pname:'Stealth black',purl:'https://royalenfield.com/classicmatte/images/gallery_big/sb1.jpg',pprice:35},
        {pname:'Classic Gun Metal Grey',purl:'https://royalenfield.com/classicmatte/images/gallery_big/gm1.jpg',pprice:75},
        {pname:'classic desert storm',purl:'https://royalenfield.com/images/data/menu/image49.jpg',pprice:80},
        {pname:'Classic Chrome',purl:'https://royalenfield.com/id-eng/images/data/menu/image10.jpg',pprice:96},
        {pname:'Classic Chrome',purl:'https://royalenfield.com/np/images/data/menu/image1.jpg',pprice:54},
        {pname:'classic-battle-green',purl:'https://royalenfield.com/ae/images/data/menu/image6.jpg',pprice:82},
        
      ];
    
      constructor(private router: Router) { }
    
      ngOnInit() {
    
    
        
      }
    
      detailfn(product){
        
        this.router.navigate(['/productdetail',product.pname,product.purl,product.pprice]);
        
    
      }
    
    
    
    }
    
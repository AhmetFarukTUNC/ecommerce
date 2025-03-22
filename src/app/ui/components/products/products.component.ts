import { Component, OnInit } from '@angular/core';
import { BaseComponent, SpinnerType } from '../../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpClientService } from '../../../services/common/http-client.service';
import { Create_Product } from '../../../contracts/create_product';
import {MatSidenavModule} from '@angular/material/sidenav';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent extends BaseComponent implements OnInit {
constructor(spinner:NgxSpinnerService,private httpClientService : HttpClientService) {
super(spinner)  
}

ngOnInit(): void {
  this.showSpinner(SpinnerType.BallAtom);
  
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.hideSpinner(SpinnerType.BallAtom);
    }, 1000);

   

    // this.httpClientService.post({
    //   controller:"products"
    // },{
    //   name:"Kalem23",
    //   stock:100,
    //   price:15
    // }).subscribe();
    // this.httpClientService.post({
    //   controller:"products"
    // },{
    //   name:"Kalem33",
    //   stock:100,
    //   price:15
    // }).subscribe();
    // this.httpClientService.post({
    //   controller:"products"
    // },{
    //   name:"Kalem44",
    //   stock:100,
    //   price:15
    // }).subscribe();

    // this.httpClientService.put({
    //   controller:"products"
    // },{
    //   id:"f431bb87-174d-414a-7217-08dd640fe3c9",
    //   name:"renkli kalem",
    //   stock:1500,
    //   price:5.5
    // }).subscribe();

    // this.httpClientService.delete({
    //   controller:"products"
    // },"af5e67b8-e82b-4643-7219-08dd640fe3c9").subscribe()

    this.httpClientService.get<Create_Product>({
      
      controller:"products"
    }).subscribe(data => console.log(data));



    

    
}


}

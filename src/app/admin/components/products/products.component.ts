import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from '../../../base/base.component';
import { HttpClientService, RequestParameters } from '../../../services/common/http-client.service';
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

    this.httpClientService.get<Create_Product[]>({
      controller:"products"
    }).subscribe(data => console.log(data))

    // this.httpClientService.post({
    //   controller:"products"
    // },{
    //   name: "Kalemmmmm",
    //   stock: 100,
    //   price:15
    // }).subscribe()

    // this.httpClientService.post({
    //   controller:"products"
    // },{
    //   name: "Kağıtt",
    //   stock: 1000,
    //   price:20
    // }).subscribe()

    // this.httpClientService.post({
    //   controller:"products"
    // },{
    //   name: "Silgi",
    //   stock: 2000,
    //   price:25
    // }).subscribe()
    // this.httpClientService.post({
    //   controller:"products"
    // },{
    //   name: "Defter",
    //   stock: 120,
    //   price:15
    // }).subscribe()

    // this.httpClientService.put(
    //   {
    //     controller:"products"
    //   },{
    //     id:"86046f67-b95e-4d36-f914-08dd597e9108",
    //     name: "Silgiiiiiii",
    //     stock: 1000,
    //     price: 5.5
    //   }
    // ).subscribe();
    
    // this.httpClientService.delete({
    //   controller:"products"
    // },"86046f67-b95e-4d36-f914-08dd597e9108").subscribe()

    // this.httpClientService.get({
    //   baseUrl : "https://jsonplaceholder.typicode.com/",
    //   controller:"posts"
    // }).subscribe(data => console.log(data))
    
}

}

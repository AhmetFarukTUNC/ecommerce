import { Component, OnInit } from '@angular/core';
import { BaseComponent, SpinnerType } from '../../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpClientService } from '../../../services/common/http-client.service';

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

    this.httpClientService.get({
      
      controller:"products"
    }).subscribe(data => console.log(data));
}


}

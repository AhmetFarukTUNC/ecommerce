import { Component, OnInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { ProductService } from '../../../../services/common/product.service';
import { Create_Product } from '../../../../contracts/create_product';
import { BaseComponent, SpinnerType } from '../../../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlertifyService, MessageType, Position } from '../../../../services/admin/alertify.service';
@Component({
  selector: 'app-create',
  standalone: false,
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent extends BaseComponent implements OnInit {
  
  constructor(spinner:NgxSpinnerService,private productService:ProductService,private alertify:AlertifyService) {
    super(spinner);
  }
  
  ngOnInit(): void {
    
  }

  create(txtName:HTMLInputElement,txtStock:HTMLInputElement,txtPrice:HTMLInputElement){
    this.showSpinner(SpinnerType.BallAtom); 
    
    const create_product :Create_Product = new Create_Product();

     create_product.name = txtName.value;
     create_product.stock = parseInt(txtStock.value);
     create_product.price = parseFloat(txtPrice.value);
     this.productService.create(create_product,() => this.hideSpinner(SpinnerType.BallAtom));
     this.alertify.message("Ürün başarıyla eklenmiştir.",{
      dismissOthers:true,
      messageType:MessageType.Success,
      position:Position.TopRight
     })
  }
}

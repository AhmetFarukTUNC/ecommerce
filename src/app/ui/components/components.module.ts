import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { BasketComponent } from './baskets/baskets.component';

import { BasketModule } from './baskets/baskets.module';
import { ProductsModule } from './products/products.module';
import { HomeModule } from './home/home.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    
    
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ComponentsModule { }

import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from './services/ui/custom-toastr.service';


declare var  $: any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false // Standalone özelliğini kaldır
})
export class AppComponent{
  title = 'ecommerce';

  constructor(){
  
  }

  

  

}

$.get("https://localhost:7131/api/products")


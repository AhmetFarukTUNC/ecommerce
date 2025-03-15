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
export class AppComponent implements OnInit{
  title = 'ecommerce';

  constructor(){
  
  }

  ngOnInit(): void {
    $.get("https://localhost:7182/api/products")
  }

  

  

}




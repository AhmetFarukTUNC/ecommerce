import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from './services/ui/custom-toastr.service';
import { MessageType } from './services/admin/alertify.service';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false // Standalone özelliğini kaldır
})
export class AppComponent implements OnInit {
  title = 'ecommerce';

  constructor(private toastrService:CustomToastrService){
    toastrService.message ("Merhaba", "Gençay", {
      messageType: ToastrMessageType.Info,
      position: ToastrPosition. TopCenter
      });
      toastrService.message("Merhaba", "Gençay", {
      messageType: ToastrMessageType.Success,
      position: ToastrPosition. TopCenter
      });
      toastrService.message("Merhaba", "Gençay", {
      messageType: ToastrMessageType.Eroor,
      position: ToastrPosition. TopCenter
      });
      toastrService.message("Merhaba", "Gençay", {
      messageType: ToastrMessageType.Warning,
      position: ToastrPosition. TopCenter
      });
  }

  ngOnInit(): void {
    
  }
}


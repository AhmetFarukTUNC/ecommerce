import { Component,OnInit } from '@angular/core';
import { AlertifyService, MessageType, Position } from '../../services/admin/alertify.service';
declare var alertify: any;
@Component({
  selector: 'app-layout',
  standalone: false,
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent implements OnInit{

  constructor(private alertify : AlertifyService) {}

  ngOnInit(): void {
    // this.alertify.message("Merhaba",MessageType.Notify)
    // this.alertify.message("Merhaba",MessageType.Error)
    // this.alertify.message("Merhaba",MessageType.Success)
    // this.alertify.message("Merhaba",MessageType.Message)
    // this.alertify.message("Merhaba",MessageType.Warning)
    // this.alertify.message("Merhaba",MessageType.Error,Position.TopCenter)
    // this.alertify.message("Merhaba",MessageType.Error,Position.BottomCenter)
    // this.alertify.message("Merhaba",MessageType.Error,Position.BottomLeft)
    // this.alertify.message("Merhaba",MessageType.Error,Position.BottomRight)
    // this.alertify.message("Merhaba",MessageType.Error,Position.TopLeft)
    // this.alertify.message("Merhaba",MessageType.Error,Position.TopRight)
    //this.alertify.message("Merhaba",MessageType.Error,Position.TopCenter,35)
    
  }

}

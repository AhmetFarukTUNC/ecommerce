import { Component, OnInit } from '@angular/core';

import { AlertifyService,MessageType,Position } from '../../../services/admin/alertify.service';
import { BaseComponent, SpinnerType } from '../../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent extends BaseComponent  implements OnInit{
      constructor(private alertify:AlertifyService,spinner:NgxSpinnerService){
        super(spinner)
      }

      ngOnInit(): void {
        this.showSpinner(SpinnerType.BallAtom);
        
          setTimeout(() => {
            /** spinner ends after 5 seconds */
            this.hideSpinner(SpinnerType.BallAtom);
          }, 1000);
      }
 
      m(){
        this.alertify.message("merhaba",{
          messageType:MessageType.Success,
          delay : 5,
          position : Position.BottomLeft

        })
      }

      d(){
        this.alertify.dismiss();
      }
}

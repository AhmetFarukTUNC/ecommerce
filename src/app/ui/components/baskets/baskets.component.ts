import { Component, OnInit } from '@angular/core';
import { BaseComponent, SpinnerType } from '../../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-basket',
  standalone: false,
  templateUrl: './baskets.component.html',
  styleUrl: './baskets.component.scss'
})
export class BasketComponent extends BaseComponent implements OnInit {
constructor(spinner:NgxSpinnerService) {

  super(spinner)
  
}

ngOnInit(): void {
  this.showSpinner(SpinnerType.BallAtom)
}

}

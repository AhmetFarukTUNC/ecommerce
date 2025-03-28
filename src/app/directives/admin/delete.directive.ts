import { Directive, ElementRef, EventEmitter, HostListener, inject, Input, input, model, Output, Renderer2, signal } from '@angular/core';
import { HttpClientService } from '../../services/common/http-client.service';
import { ProductService } from '../../services/common/product.service';
import { BaseComponent, SpinnerType } from '../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent, DeleteState } from '../../dialogs/delete-dialog/delete-dialog.component';
import { AlertifyService, MessageType, Position } from '../../services/admin/alertify.service';
import { HttpErrorResponse } from '@angular/common/http';
declare var $ : any;
@Directive({
  selector: '[appDelete]',
  standalone: false
})
export class DeleteDirective{

  readonly animal = signal('');
  readonly name = model('');
  readonly dialog = inject(MatDialog);

  constructor(private element: ElementRef,
    private _renderer: Renderer2,
    private httpClientService:HttpClientService,
    private spinner:NgxSpinnerService,
    private alertifyService:AlertifyService) 
    {
      
      const img = this._renderer.createElement("img"); 

      img.setAttribute("src","images/delete.png");

      img.setAttribute("style","cursor:pointer");

      img.width =25;

      img.height =25;

      _renderer.appendChild(element.nativeElement, img);


      
    }

    @Input() id: string
    @Input() controller:string
    @Output() callback : EventEmitter<any> = new EventEmitter();
    @HostListener("click")
    async onclick(){
      this.openDialog(async () =>{
        this.spinner.show(SpinnerType.BallAtom);
      console.log(this.id);
      const td:HTMLTableCellElement = this.element.nativeElement;
      //await this.productService.delete(this.id);
      this.httpClientService.delete({
        controller:this.controller
      },this.id).subscribe(data => {
        $(td.parentElement).animate({
          opacity:0,
          left:"+=50",
          height:"toggle",
  
        },700,() =>{
          this.callback.emit();
          this.alertifyService.message("Ürün başarıyla silinmiştir.",{
            dismissOthers:true,
            messageType:MessageType.Success,
            position:Position.TopRight
          })
        })
      },(errorResponse:HttpErrorResponse) =>{
        this.spinner.hide(SpinnerType.BallAtom)
        this.alertifyService.message("Ürün silinirken bir hata oluştu.",{
          dismissOthers:true,
          messageType:MessageType.Error,
          position:Position.TopRight
        })
      })
      

      
      
      });

      

    }

    openDialog(afterClosed:any): void {
      const dialogRef = this.dialog.open(DeleteDialogComponent, {
        data: DeleteState.Yes,
      })
  
      dialogRef.afterClosed().subscribe(result => {
        
        if (result == DeleteState.Yes) {
          afterClosed();
        }

      });
    }
  
  

}

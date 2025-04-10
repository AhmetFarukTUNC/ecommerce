import { Injectable } from '@angular/core';
import { DialogPosition, MatDialog } from '@angular/material/dialog';
import { FileUploadDialogComponent, FileUploadDialogState } from '../../../dialogs/file-upload-dialog/file-upload-dialog.component';
import { ComponentType } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class DialogService<DialogComponent> {

  constructor(private dialog :MatDialog) { }

  openDialog(dialogParameters:Partial<DialogParameters>): void {
      const dialogRef = this.dialog.open(dialogParameters.ComponentType, {
        width: dialogParameters.options?.width,
        height:dialogParameters.options?.height,
        position : dialogParameters.options?.position,
        data: dialogParameters.data
      });
  
      dialogRef.afterClosed().subscribe((result) => {
        if (result === dialogParameters.data) {
          dialogParameters.afterClosed();
        }
      });
    }
}

export class DialogParameters{
  ComponentType : ComponentType<any>

  data: any
  
  afterClosed : () => void

  options? : Partial<DialogOptions> = new DialogOptions();

}

export class DialogOptions {
  width? : string

  height?:string

  position? : DialogPosition
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileuploadComponent } from './fileupload.component';
import {NgxFileDropModule} from "ngx-file-drop";
import { DialogModule } from '../../../dialogs/dialog/dialog.module';
import { CreateComponent } from '../../../admin/components/products/create/create.component';



@NgModule({
  declarations: [
    
    FileuploadComponent
  ],
  imports: [
    CommonModule,
    NgxFileDropModule,
    
  ],
  exports:[
    FileuploadComponent
  ]
})
export class FileuploadModule { }

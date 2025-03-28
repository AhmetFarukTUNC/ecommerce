import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { NgxFileDropEntry } from 'ngx-file-drop';
import { HttpClientService } from '../http-client.service';
import { AlertifyService, MessageType, Position } from '../../admin/alertify.service';
import { ToastrService } from 'ngx-toastr';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from '../../ui/custom-toastr.service';




@Component({
  selector: 'app-fileupload',
  standalone: false,
  templateUrl: './fileupload.component.html',
  styleUrl: './fileupload.component.scss'
})
export class FileuploadComponent {
  constructor(private httpClientService: HttpClientService,
    private alertifyService:AlertifyService,
    private customToastrService:CustomToastrService) 
    {

    }

  @Input() options:Partial<FileUploadOptions>;

  files: NgxFileDropEntry[] = []; 
  
  public selectedFiles(files: NgxFileDropEntry[]) {
  this.files = files

  const fileData : FormData = new FormData();
  
  for(const file of files){ 
     (file.fileEntry as FileSystemFileEntry).file((_file: File) =>{
      fileData.append(_file.name,_file,file.relativePath)
     })
  }

  this.httpClientService.post({
     controller:this.options.controller,
     action:this.options.action,
     queryString:this.options.queryString,
     headers: new HttpHeaders({"responseType" : "blob"})
  },fileData).subscribe(data => {
    const message : string = "Dosyalar başarıyla yüklenmiştir."
    if (this.options.isAdminPage) {
      this.alertifyService.message(message,{
        dismissOthers:true,
        messageType:MessageType.Success,
        position:Position.TopRight
      })
    }
    
    else{
      this.customToastrService.message(message,"Başarılı",{
        messageType:ToastrMessageType.Success,
        position:ToastrPosition.TopRight

      })
    }
  },(errorResponse:HttpErrorResponse) =>{
    const message:string = "Dosyalar yüklenirken beklenmeyen bir hata ile karşılaşılmıştır."
    if (this.options.isAdminPage) {
      this.alertifyService.message(message,{
        dismissOthers:true,
        messageType:MessageType.Error,
        position:Position.TopRight
      })
    }
    
    else{
      this.customToastrService.message(message,"Başarısız",{
        messageType:ToastrMessageType.Eroor,
        position:ToastrPosition.TopRight

      })
    }
  })

  


}}

export class FileUploadOptions{
  controller?  : string;

  action?      : string;

  queryString? : string;

  explanation? : string;

  accept?      : string;

  isAdminPage? : boolean = false;

}


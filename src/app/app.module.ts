import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import {ToastrModule} from "ngx-toastr"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { UiModule } from './ui/ui.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {NgxSpinnerModule} from "ngx-spinner";
import { BaseComponent } from './base/base.component'
import { HttpClientService } from './services/common/http-client.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    UiModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule,
    HttpClientModule
    
  ],
  providers: [
    
    {
      provide:"baseUrl",
      useValue:"https://localhost:7182/api",
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

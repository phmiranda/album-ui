import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PhotoModule } from './component/pages/photo/photo.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PhotoModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

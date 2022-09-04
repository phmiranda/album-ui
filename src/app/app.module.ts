import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MenuModule } from "./component/shared/menu/menu.module";
import { ContentModule } from "./component/shared/content/content.module";
import { FooterModule } from "./component/shared/footer/footer.module";
import { PhotoModule } from "./component/pages/photo/photo.module";
import { AlbumModule } from "./component/pages/album/album.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    MenuModule,
    ContentModule,
    FooterModule,
    PhotoModule,
    AlbumModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

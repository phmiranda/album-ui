import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentComponent } from "./content.component";
import { AlbumModule } from "../../pages/album/album.module";
import { PhotoModule } from "../../pages/photo/photo.module";




@NgModule({
  declarations: [
    ContentComponent
  ],
  imports: [
    CommonModule,
    AlbumModule,
    PhotoModule,
  ],
  exports: [
    ContentComponent
  ]
})
export class ContentModule { }

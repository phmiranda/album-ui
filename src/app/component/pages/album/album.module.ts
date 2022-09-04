import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";

import { AlbumComponent } from "./album.component";


@NgModule({
  declarations: [
    AlbumComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    AlbumComponent
  ]
})
export class AlbumModule { }

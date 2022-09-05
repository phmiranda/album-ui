import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AlbumComponent } from './component/pages/album/album.component';
import { PhotoComponent } from './component/pages/photo/photo.component';

const routes: Routes = [
  {
    path: '**',
    component: AppComponent
  },
  {
    path: 'albuns',
    component: AlbumComponent
  },
  {
    path: 'fotos',
    component: PhotoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

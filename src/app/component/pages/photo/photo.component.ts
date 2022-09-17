import { Component, Input, OnInit } from '@angular/core';

import { PhotoService } from "../../../service/photo/photo.service";
import { Photo } from "../../../interface/photo";

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  photos: Photo[] = [];

  constructor(private photoService: PhotoService){}

  ngOnInit(): void {
    this.photoService.index().subscribe(photos => this.photos = photos);
  }
}

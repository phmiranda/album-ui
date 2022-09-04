import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Photo } from "../../interface/photo";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http: HttpClient) {}

  index() {
    return this.http.get<Photo[]>(environment.API_BASE + '/api/album/fotos');
  }
}

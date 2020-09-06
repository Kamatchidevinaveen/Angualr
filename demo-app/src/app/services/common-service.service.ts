import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { FormArray } from '@angular/forms';
import { map } from 'rxjs/operators';

import { Album } from '../models/album.model';

@Injectable({
  providedIn: 'root',
})
export class CommonServiceService {
  url = 'https://jsonplaceholder.typicode.com/albums';
  url_1 = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  getDetails(): Observable<any> {
    return this.http.get(this.url);
  }

  getPostDetails(): Observable<any> {
    return this.http.get(this.url_1);
  }

  getAllUser(): Observable<any> {
    const url_1 = 'https://jsonplaceholder.typicode.com/users';
    return this.http.get(url_1);
  }

  getAllAsFormArray(): Observable<FormArray> {
    return this.getDetails().pipe(
      map((albums: Album[]) => {
        // Maps all the albums into a formGroup defined in tge album.model.ts
        const fgs = albums.map(Album.asFormGroup);
        return new FormArray(fgs);
      })
    );
  }
}

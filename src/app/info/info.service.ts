import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Info } from './info';

@Injectable({
  providedIn: 'root'
})
export class InfoService {




  get() {
    return this.http.get<Info[]>('http://localhost:3000/details');
  }
  create(payload: Info) {
    return this.http.post<Info>('http://localhost:3000/details', payload);
  }


  constructor(private http: HttpClient) { }
}

import { Injectable } from '@angular/core';
import { apiUrl } from 'src/environments/environment';
import {HttpClient,HttpHeaders } from '@angular/common/http';
import {Observable, of} from 'rxjs';
import { Example } from './Example';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }
  // getData():Observable<any>{
  //   const url=`${this.dataUrl2}`;
  //   return this.http.get(url).pipe()
  // }
  getData():Observable<Example[]>{
    return this.http.get<Example[]>("http://localhost:3000/data");
  }
  
}

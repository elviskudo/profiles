import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl:any = 'https://dummyapi.io/data/api/user';

  constructor(
    public http:HttpClient
  ) { }

  getList () {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'app-id': '5fcb8a6cb4e2b4535f62051b'
      })
    };

    return this.http.get(this.apiUrl, httpOptions)
  }

  getProfile (id:any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'app-id': '5fcb8a6cb4e2b4535f62051b'
      })
    };

    return this.http.get(this.apiUrl + '/' + id, httpOptions)
  }

  getPost (id:any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'app-id': '5fcb8a6cb4e2b4535f62051b'
      })
    };

    return this.http.get(this.apiUrl + '/' + id + '/post', httpOptions)
  }
}

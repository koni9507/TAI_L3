import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private url = 'https://jsonplaceholder.typicode.com/photos';

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get(this.url);
  }

  get(id) {
    return this.http.get(this.url + '/' + id);
  }
}

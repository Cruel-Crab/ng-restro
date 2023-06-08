import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:typedef
  getList() {
    return this.http.get(environment.url);
  }

  // tslint:disable-next-line:typedef
  saveRestaurant(data: any) {
    return this.http.post(environment.url, data);
  }

  // tslint:disable-next-line:typedef
  deleteRestaurant(id: number) {
    return this.http.delete(environment.url + `/${id}`);
  }

  // tslint:disable-next-line:typedef
  getThatData(id: number) {
    return this.http.get(environment.url + `/${id}`);
  }

  // tslint:disable-next-line:typedef
  updateRestaurant(id: number, data: any) {
    return this.http.put(environment.url + `/${id}`, data);
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:typedef
  registerUser(data: any) {
    return this.http.put(environment.authUrl, data);
  }

  // tslint:disable-next-line:typedef
  loginUser(data: any) {
    return this.http.get(environment.authUrl, data);
  }
}

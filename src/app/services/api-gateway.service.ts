import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiGatewayService {
  host: string;
  port: string;
  constructor(private _http: HttpClient) {
    this.port = '3000';
    this.host = 'http://localhost:' + this.port;
  }

  registerUser(payLoad: any): Observable<any> {
    return this._http.post<any>(this.host + '/registerUser', payLoad)
  }

  getUsers(): Observable<any> {
    return this._http.get<any>(this.host + '/users');

  }

  userLogin() { }
}

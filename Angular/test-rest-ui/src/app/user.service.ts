import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {user} from "./model/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // url de l'apiRest
  restUrl: string = "http://localhost:8080/api/user"
  // httpClient nessaisaire pour faire la requetes a l'Api
  constructor(private http: HttpClient) { }

  getUsers():Observable<user[]> {
    return this.http.get<user[]>(this.restUrl);
  }
}

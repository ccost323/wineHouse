import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Login } from "../models/login";
import { Observable } from "rxjs";
import { UserStoreService } from "../../shared/services/user-store.service";
import { map } from "rxjs/operators";

@Injectable({ providedIn: 'root' })
export class UserService {
  private API_ENDPOINT = "http://localhost:3000/api/user";
  constructor(private http: HttpClient, private userStore: UserStoreService) {}

  login(user: Login): Observable<any> {
    return this.http.post(`${this.API_ENDPOINT}/login`, user).pipe(
      map((resp: any) => {
        this.userStore.token = resp.token;
        return resp;
      })
    );
  }

  register(user: Login): Observable<any> {
    return this.http.post(`${this.API_ENDPOINT}/register`, user);
  }
}

import { Injectable } from "@angular/core";

@Injectable()
export class UserStoreService {
  private _token: string = null;
  constructor() {
    this._token = localStorage.getItem("wine-token") || null;
  }

  set token(token: string) {
    this._token = token;
    localStorage.setItem("wine-token", token);
  }

  get token() {
    return this._token;
  }

  isLoggedIn() {
    return this.token !== null;
  }
}


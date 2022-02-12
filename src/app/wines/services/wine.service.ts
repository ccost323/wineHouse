import { Injectable } from '@angular/core';
import { Observable} from "rxjs";
import { HttpClient } from '@angular/common/http';

import { Wine } from '../models/wine';

@Injectable({
  providedIn: 'root'
})
export class WineService {

  private API_ENDPOINT = "http://localhost:3000/api/wine";

  constructor(private httpClient: HttpClient) {}

  getWines(term?: string): Observable<Wine[]> {
    return this.httpClient.get<Wine[]>(this.API_ENDPOINT, {
      params: {
        q: term,
      },
    });
  }

  getWine(wineId: string): Observable<any> {
    return this.httpClient.get<Wine>(`${this.API_ENDPOINT}/${wineId}`);
  }

  changeQuantity(wineId: number, changeInQuantity: number): Observable<Wine> {
      return this.httpClient.patch<Wine>(`${this.API_ENDPOINT}/${wineId}`, {
        changeInQuantity: changeInQuantity
      });  
  }

  selectQuantity(wineId: number, quantitySelected: number): Observable<Wine> {
    return this.httpClient.patch<Wine>(`${this.API_ENDPOINT}/${wineId}`, {
      quantitySelected : quantitySelected
    });  
  }

  create(wine: Wine): Observable<any> {

    return this.httpClient.post<Wine>(this.API_ENDPOINT, wine);
  }

  makeFailingCall() {
    return this.httpClient.get("/api/fail");
  }
}

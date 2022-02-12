import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot} from '@angular/router';
import { Observable} from 'rxjs';
import { Wine } from '../models/wine';
import { WineService } from '../services/wine.service';

@Injectable({
  providedIn: 'root'
})
export class WineLoadResolver implements Resolve<Wine> {

  constructor(private wineService: WineService) { }

  resolve(route: ActivatedRouteSnapshot):  Wine | Observable<Wine> | Promise<Wine> {
    const wineId = route.paramMap.get('id');
    return this.wineService.getWine(wineId);
  }
}

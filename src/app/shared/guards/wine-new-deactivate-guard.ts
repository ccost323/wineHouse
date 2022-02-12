import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { WineNewComponent } from '../../wines/components/wine-new/wine-new.component';

@Injectable({
  providedIn: 'root'
})
export class WineNewDeactivateGuard implements CanDeactivate<WineNewComponent> {

  constructor() { }

  canDeactivate(component: WineNewComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return window.confirm('Do you want to navigate away from this page?');
  }
}

import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';


import { Observable } from 'rxjs';
import { tap } from "rxjs/internal/operators";


import { AuthService } from "../../user/services/auth.service";

@Injectable()
export class WineAppInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this.authService.authToken) {
      const authReq = request.clone({
        headers: request.headers.set("Authorization", this.authService.authToken),
      });
      console.log("Making an authorized request");
      request = authReq;
    }
    return next.handle(request).pipe(
      tap(
        (event) => this.handleResponse(request, event),
        (error) => this.handleError(request, error)
      )
    );
  }

  handleResponse(req: HttpRequest<any>, event: any) {
    console.log("Handling response for ", req.url, event);
    if (event instanceof HttpResponse) {
      console.log(
        "Request for ",
        req.url,
        " Response Status ",
        event.status,
        " With body ",
        event.body
      );
    }
  }

  handleError(req: HttpRequest<any>, event: any) {
    console.error(
      "Request for ",
      req.url,
      " Response Status ",
      event.status,
      " With error ",
      event.error
    );
  }

}

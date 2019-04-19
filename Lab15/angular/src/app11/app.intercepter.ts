import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { HttpEvent, HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable()

export class AppIntercepter implements HttpInterceptor{
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authReq = req.clone({
      headers: req.headers.set('Authorization', 'Bearer' + localStorage.getItem('token'))
    });

    return next.handle(authReq);
  }
}

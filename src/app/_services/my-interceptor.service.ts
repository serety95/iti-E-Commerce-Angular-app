import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyInterceptorService implements HttpInterceptor {
  constructor() { }
 
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
      const token = localStorage.getItem('token');
      const reqClone=req.clone({headers:req.headers.append('authorization',`${token}`)})
      ;
      
      return next.handle(reqClone);
    }
  
}

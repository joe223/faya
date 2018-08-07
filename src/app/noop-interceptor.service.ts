import {Observable} from 'rxjs';
import { Injectable} from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { map, filter, tap } from 'rxjs/operators'
import {HttpResponse} from '@angular/common/http'

@Injectable()
export class NoopInterceptorService implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const started = Date.now();

        const apiReq = req.clone({ url: `http://127.0.0.1:3000${req.url}` });

        return next.handle(apiReq).pipe(
        tap(event => {
          if (event instanceof HttpResponse) {
            const elapsed = Date.now() - started;
            console.log(`Request for ${req.urlWithParams} took ${elapsed} ms.`);
          }
        }, error => {
          console.error('NICE ERROR', error)
        })
      )
    }
}
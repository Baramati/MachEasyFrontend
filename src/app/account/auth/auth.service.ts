import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const accessToken: string = localStorage.getItem('access_token');
    // set global application headers.
    request = request.clone({
      setHeaders: {
        'Content-Type': 'application/json; charset=utf-8',
        Accept: 'application/json',
        'X-Locale': 'en'
      }
    });
    // Set headers for requests that require authorization.
    if (accessToken) {
      const authenticatedRequest = request.clone({
        headers: request.headers.set(
          'Authorization',
          `Token token=${accessToken}`
        )
      });
      // Request with authorization headers
      return next.handle(authenticatedRequest);
    } else {
      // Request without authorization header
      return next.handle(request);
    }
  }
}

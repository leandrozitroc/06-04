import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from '../storage/storage.service';

@Injectable()
export class Interceptor implements HttpInterceptor {

    constructor(private storageService: StorageService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let request: HttpRequest<any> = req;
        let token = this.storageService.getToken();
        request = req.clone({
            headers: req.headers.set('authorization', `Bearer ${token}`)
        });
        return next.handle(request);
    }

}

export const HttpInterceptorAuthenticate = [
    { provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true }
];

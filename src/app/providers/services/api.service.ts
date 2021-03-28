import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }
  handleErrors(error: any) {
    if (error.status === 400) return throwError(error.error);
    if (error.status === 404) return throwError("USER DATA NOT AVAILABLE");// getting userData as {} , thats why hardcoded msg .
  }

  get(path: string, options = {}): Observable<any> {
    return this.http
      .get(`${environment.api_url}${path}`, options)
      .pipe(catchError(this.handleErrors.bind(this)));
  }

  post(path: string, body: Object = {}): Observable<any> {
    return this.http
      .post(`${environment.api_url}${path}`, body)
      .pipe(catchError(this.handleErrors.bind(this)));
  }

}

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LookupService {

  API_URL = environment.API_URL;
  
  constructor(private http:HttpClient) {}

  retrieveAccountTypeLookup(): Promise<any>{
    return this.http.get(`${this.API_URL}lookup/account-type`)
    .toPromise().then((response: any) => {
      return response?.Data;
     }).catch(this.handleError);
  }
  private handleError(exception: HttpErrorResponse): Observable<never> {
    console.log(`Service Exception: ${exception.message}`);
    return throwError(`Service Exception: ${exception.message}`);
  }
}

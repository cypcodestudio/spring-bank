import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DashboardResponse } from '../domain/DashboardResponse';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  API_URL = environment.API_URL;
  
  constructor(private http:HttpClient) {}

  dashboard(): Promise<any>{
    return this.http.get(`${this.API_URL}dashboard`)
    .toPromise().then((response: any) => {
      return response?.Data as DashboardResponse;
     }).catch(this.handleError);
  }
  private handleError(exception: HttpErrorResponse): Observable<never> {
    console.log(`Service Exception: ${exception.message}`);
    return throwError(`Service Exception: ${exception.message}`);
  }
}

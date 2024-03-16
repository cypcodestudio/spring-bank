import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { TransferRequest } from 'src/app/transact/transfer/param/TransferRequest';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransactService {
  API_URL = environment.API_URL;
  
  constructor(private http: HttpClient) { }

  retrieveAllAccountsBalance(): Promise<any>{
    return this.http.get(`${this.API_URL}bank/balance`)
    .toPromise().then((response: any) => {
      return response?.Data;
     }).catch(this.handleError);
  }

  retrieveAccountBalance(param: String): Promise<any>{
    return this.http.get(`${this.API_URL}bank/balance/${param}`)
    .toPromise().then((response: any) => {
      return response?.Data;
     }).catch(this.handleError);
  }

  transfer(request: TransferRequest){
    return this.http.post(`${this.API_URL}bank/transfer`,request).toPromise().then((response: any)=>{
      return response;
    }).catch(this.handleError);
  }

  private handleError(exception: HttpErrorResponse): Observable<never> {
    console.log(`Service Exception: ${exception.message}`);
    return throwError(`Service Exception: ${exception.message}`);
  }
}

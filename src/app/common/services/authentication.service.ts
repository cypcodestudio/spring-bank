import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { Authenticationrequest } from 'src/app/account/login/param/AuthenticationRequest';
import { RegistrationRequest } from 'src/app/account/login/param/RegistrationRequest';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  API_URL = environment.API_URL;
  constructor(private http:HttpClient, private router: Router) {}

  userLogin(request: Authenticationrequest){
    return this.http.post(`${this.API_URL}user/authenticate`,request)
    .toPromise().then((response: any) => {
      if (response?.Data?.token != null && response?.Data?.refresh != null) {
         localStorage.setItem("token", response?.Data?.token);
         localStorage.setItem("refresh_token", response?.Data?.refresh);
       }
     }).catch(this.handleError);
  }

  userRegister(request: RegistrationRequest): Promise<any>{
   return this.http.post<any>(`${this.API_URL}user/register`,request)
    .toPromise().then((response: any) =>{
      return response?.Data;
    }).catch(this.handleError);
  }

  logout(){
    localStorage.removeItem("token");
    localStorage.removeItem("refresh_token");
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
        this.router.navigate(['']));
  }

  private handleError(exception: HttpErrorResponse): Observable<never> {
    console.log(`Service Exception: ${exception}`);
    return throwError(`Service Exception: ${exception.message}`);
  }
}

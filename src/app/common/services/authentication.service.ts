import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { Observable, throwError } from 'rxjs';
import { Authenticationrequest } from 'src/app/account/login/param/AuthenticationRequest';
import { RegistrationRequest } from 'src/app/account/login/param/RegistrationRequest';
import { environment } from 'src/environments/environment';
import { ELookup } from '../enum/ELookup';
import { UpdatePasswordRequest } from 'src/app/account/update-password/param/UpdatePasswordRequest';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  API_URL = environment.API_URL;
  isUserLoggedIn = false;
  constructor(private http:HttpClient, private router: Router, public jwtHelper: JwtHelperService) {}

  userLogin(request: Authenticationrequest){
    return this.http.post(`${this.API_URL}user/authenticate`,request)
    .toPromise().then((response: any) => {
      if (response?.Data?.token != null && response?.Data?.refresh != null) {
         localStorage.setItem(ELookup.TOKEN_NAME, response?.Data?.token);
         localStorage.setItem(ELookup.REFRESH_TOKEN_NAME, response?.Data?.refresh);
       }
     }).catch(this.handleError);
  }

  updatePassword(request: UpdatePasswordRequest){
    return this.http.post(`${this.API_URL}user/update-password`,request).toPromise().then((response: any)=>{
      return response;
    }).catch(this.handleError);
  }
  userRegister(request: RegistrationRequest): Promise<any>{
   return this.http.post<any>(`${this.API_URL}user/register`,request)
    .toPromise().then((response: any) =>{
      return response?.Data;
    }).catch(this.handleError);
  }
  

  get token() {
    let token: any = localStorage.getItem(ELookup.TOKEN_NAME);
    return token; 
  }
  get username(){
    let tokenDecoded = this.jwtHelper.decodeToken(this.token);
    return tokenDecoded.sub;
  }
  public isAuthenticated(): boolean {
    if(this.token != null && this.jwtHelper.isTokenExpired(this.token)){
      let token: any = localStorage.getItem(ELookup.REFRESH_TOKEN_NAME);
      localStorage.setItem(ELookup.TOKEN_NAME, token);
    }

    this.isUserLoggedIn = !this.jwtHelper.isTokenExpired(this.token);
    return this.isUserLoggedIn;
  }

  redirectTo(uri: string) {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
    this.router.navigate([uri]));
  }

  logout(){
    localStorage.removeItem("token");
    localStorage.removeItem("refresh_token");
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
        this.router.navigate(['']));
  }

  private handleError(exception: HttpErrorResponse): Observable<never> {
    console.log(`Service Exception: ${exception.message}`);
    return throwError(`Service Exception: ${exception.message}`);
  }
}

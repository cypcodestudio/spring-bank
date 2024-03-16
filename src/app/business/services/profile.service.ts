import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserProfileResponse } from '../domain/UserProfileResponse';
import { Observable, throwError } from 'rxjs';
import { UpdateProfileRequest } from 'src/app/account/profile/param/UpdateProfileRequest';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  API_URL = environment.API_URL;
  
  constructor(private http:HttpClient) {}

  profile(): Promise<any>{
    return this.http.get(`${this.API_URL}user`)
    .toPromise().then((response: any) => {
      return response?.Data as UserProfileResponse;
     }).catch(this.handleError);
  }

  updateProfile(param: String, request: UpdateProfileRequest){
    return this.http.put(`${this.API_URL}user/profile?entityNo=${param}`,request).toPromise().then((response: any)=>{
      return response;
    }).catch(this.handleError);
  }

  private handleError(exception: HttpErrorResponse): Observable<never> {
    console.log(`Service Exception: ${exception.message}`);
    return throwError(`Service Exception: ${exception.message}`);
  }
}

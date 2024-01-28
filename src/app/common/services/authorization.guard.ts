import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';
import { jwtDecode } from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class AuthorizationGuard implements CanActivate {
  constructor(public authenticationService: AuthenticationService) {}
  
  canActivate(route: ActivatedRouteSnapshot): boolean {
    // this will be passed from the route config
    // on the data property
    const expectedRoles = route.data['roles'];
    // decode the token to get its payload
    let tokenPayload: any = jwtDecode(this.authenticationService.token);
    let access = "null";
    if (this.authenticationService.isAuthenticated()) {
      tokenPayload.role.forEach((claim: any) => {
        if (expectedRoles.includes(claim.authority)) {
          access = "true";
        }
      });
    }
    if (access === "true") {
      return true;
    }
    return false;
  }
  
}

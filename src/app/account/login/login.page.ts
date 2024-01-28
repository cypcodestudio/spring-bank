import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/common/services/authentication.service';
import { Authenticationrequest } from './param/AuthenticationRequest';
import { Router } from '@angular/router';
import { RegistrationRequest } from './param/RegistrationRequest';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  screen: any = 'signin';
  loginFormGroup: FormGroup = new FormGroup({
    username: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required])
  });
  registerFormGroup: FormGroup = new FormGroup({
    firstName: new FormControl("", [Validators.required]),
    lastName: new FormControl("", [Validators.required]),
    entityNumber: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.email]),
    mobile: new FormControl("", [Validators.required]),
    username: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required]),
    confirmPassword: new FormControl("", [Validators.required])
  });
  forgotPasswordFormGroup: FormGroup = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email])
  });
  isLoading: boolean = false;
  isToastOpen: boolean = false;
  toastMessage = "Welcome to SpringBank";
  constructor( private authenticationService:AuthenticationService, private router: Router) {
  }

  ngOnInit() {
  }

  change(event: any){
    this.screen = event;
  }
  setOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }

  login(){
    var request: Authenticationrequest = new Authenticationrequest(this.loginFormGroup.get("username")?.value, this.loginFormGroup.get("password")?.value);
      
    if(this.loginFormGroup.valid){
      this.authenticationService.userLogin(request).then(()=>{
        //todo Validate token expiry before redirect
        if(this.authenticationService.isAuthenticated()){
        this.authenticationService.redirectTo('dashboard/tabs/tab1');
       }
      });
    }  
  }

  register(){
    if(this.registerFormGroup.valid){
      if(this.registerFormGroup.get("password")?.value != this.registerFormGroup.get("confirmPassword")?.value){
        this.toastMessage = "Confirm Password is not the same as the password you provided.";
        this.setOpen(true);
        return;
      }
  
      var request: RegistrationRequest = new RegistrationRequest(this.registerFormGroup.get("firstName")?.value,
      this.registerFormGroup.get("lastName")?.value,
      this.registerFormGroup.get("entityNumber")?.value,
      this.registerFormGroup.get("email")?.value,
      this.registerFormGroup.get("mobile")?.value,
      this.registerFormGroup.get("username")?.value,
      this.registerFormGroup.get("password")?.value); 
  
      this.authenticationService.userRegister(request).then((data:any)=>{
        this.toastMessage = data;
        this.setOpen(true);
      });
    }  
  }


}

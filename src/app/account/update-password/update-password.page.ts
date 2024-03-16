import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/common/services/authentication.service';
import { UpdatePasswordRequest } from './param/UpdatePasswordRequest';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.page.html',
  styleUrls: ['./update-password.page.scss'],
})
export class UpdatePasswordPage implements OnInit {
  updatePasswordFormGroup: FormGroup = new FormGroup({
    password: new FormControl("", [Validators.required]),
    confirmPassword: new FormControl("", [Validators.required])
  });

  isToastOpen: boolean = false;
  toastMessage = "";
  

  constructor(private authenticationService:AuthenticationService) { }

  ngOnInit() {
  }

  updatePassword(){
    let request: UpdatePasswordRequest = new UpdatePasswordRequest(this.updatePasswordFormGroup.get("password")?.value, this.updatePasswordFormGroup.get("confirmPassword")?.value)
    this.authenticationService.updatePassword(request).then((response: any)=>{
      if(response?.Data === "Success"){
        this.toastMessage = response?.Data;
        this.setOpen(true);
        setTimeout(()=>{
          this.authenticationService.redirectTo("/tabs/profile");
        }, 2000);
      }else{
        this.toastMessage = response?.Data;
        this.setOpen(true);
      }
    });  
  
  }
  cancel(){
    this.authenticationService.redirectTo("/tabs/profile");
  }
  setOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }
}

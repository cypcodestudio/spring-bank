import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserProfileResponse } from 'src/app/business/domain/UserProfileResponse';
import { ProfileService } from 'src/app/business/services/profile.service';
import { UpdateProfileRequest } from './param/UpdateProfileRequest';
import { RedirectService } from 'src/app/business/services/redirect.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  payload!: UserProfileResponse;
  screen: any = 'view';
  isToastOpen: boolean = false;
  toastMessage = "";
  
  profileFormGroup: FormGroup = new FormGroup({
    firstname: new FormControl("", [Validators.required]),
    lastname: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required]),
    mobile: new FormControl("", [Validators.required])
  });
  constructor(private profileService: ProfileService, private redirectService: RedirectService) { }

  ngOnInit() {
   this.retrieveProfile();
  }
  
  setOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }

  retrieveProfile(){
    this.profileService.profile().then((response: any) =>{
      this.payload = response;
      this.populateProfileForm();
    });
  }
  populateProfileForm(){
    this.profileFormGroup.get("firstname")?.setValue(this.payload.firstname);
    this.profileFormGroup.get("lastname")?.setValue(this.payload.lastname);
    this.profileFormGroup.get("email")?.setValue(this.payload.email);
    this.profileFormGroup.get("mobile")?.setValue(this.payload.mobile);
  }
  change(event: any){
    this.screen = event;
  }
  save(){

     let request: UpdateProfileRequest = new UpdateProfileRequest(
      this.profileFormGroup.get("firstname")?.value,
      this.profileFormGroup.get("lastname")?.value,
      this.profileFormGroup.get("email")?.value,
      this.profileFormGroup.get("mobile")?.value
     );

    this.profileService.updateProfile(this.payload.entityNo, request).then((response: any)=>{
      this.toastMessage = response?.Data;
      this.setOpen(true);
    });
    setTimeout(()=>{
      this.redirectService.reload();
    },2000);
  }
  cancel(){
    this.change('view');
  }
}

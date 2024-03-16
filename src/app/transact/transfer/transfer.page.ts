import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TransactService } from 'src/app/business/services/transact.service';
import { TransferRequest } from './param/TransferRequest';
import { RedirectService } from 'src/app/business/services/redirect.service';
import { LookupService } from 'src/app/business/services/lookup.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.page.html',
  styleUrls: ['./transfer.page.scss'],
})
export class TransferPage implements OnInit {
  transferFormGroup: FormGroup = new FormGroup({
    fromAccount: new FormControl("", [Validators.required]),
    toAccount: new FormControl("", [Validators.required]),
    amount: new FormControl("", [Validators.required])
  });
  accountTypeLookupList: any;

  isToastOpen: boolean = false;
  toastMessage = "";
  

  constructor(private transactService:TransactService, private redirectService: RedirectService) { }

  ngOnInit() {
    this.populateLookup();
  }

  populateLookup(){
    this.transactService.retrieveAllAccountsBalance().then((response: any)=>{
      this.accountTypeLookupList = response;
    });
  }
  transfer(){
    let request: TransferRequest = new TransferRequest(this.transferFormGroup.get("fromAccount")?.value,
     this.transferFormGroup.get("toAccount")?.value,
     this.transferFormGroup.get("amount")?.value)
    this.transactService.transfer(request).then((response: any)=>{
      let data: String = response?.Data as String; 
      if(data.includes("success")){
        this.toastMessage = response?.Data;
        this.setOpen(true);
        setTimeout(()=>{
          this.redirectService.redirectTo("/tabs/bank");
        }, 2000);
      }else{
        this.toastMessage = response?.Data;
        this.setOpen(true);
      }
    });  
  
  }
  cancel(){
    this.redirectService.redirectTo("/tabs/bank");
  }
  setOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }
}

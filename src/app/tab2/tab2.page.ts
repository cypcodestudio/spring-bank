import { Component, OnInit } from '@angular/core';
import { TransactService } from '../business/services/transact.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{


  accountBalanceList: any;
  constructor(private transactService:TransactService) {}

  ngOnInit(): void {
    this.populateLookup();
  }
  
  populateLookup(){
    this.transactService.retrieveAllAccountsBalance().then((response: any)=>{
      this.accountBalanceList = response;
    });
  }
}

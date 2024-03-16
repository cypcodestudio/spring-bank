import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransactionHistoryPage } from './transaction-history.page';

const routes: Routes = [
  {
    path: '',
    component: TransactionHistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransactionHistoryPageRoutingModule {}

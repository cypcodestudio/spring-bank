import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WithdrawPage } from './withdraw.page';

const routes: Routes = [
  {
    path: '',
    component: WithdrawPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WithdrawPageRoutingModule {}

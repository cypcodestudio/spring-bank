import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './common/services/authentication.guard';
import { AuthorizationGuard } from './common/services/authorization.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./account/login/login.module').then( m => m.LoginPageModule)
  },{
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
    canActivate: [AuthenticationGuard, AuthorizationGuard],
    data: {
      roles: ['ROLE_USER', 'ROLE_MANAGER', 'ROLE_ADMIN', 'ROLE_SUPER_ADMIN']
    }
  },
  {
    path: 'profile',
    loadChildren: () => import('./account/profile/profile.module').then( m => m.ProfilePageModule),
    canActivate: [AuthenticationGuard, AuthorizationGuard],
    data: {
      roles: ['ROLE_USER', 'ROLE_MANAGER', 'ROLE_ADMIN', 'ROLE_SUPER_ADMIN']
    }
  },
  {
    path: 'main-app-menu',
    loadChildren: () => import('./navigation/main-app-menu/main-app-menu.module').then( m => m.MainAppMenuPageModule),
    canActivate: [AuthenticationGuard, AuthorizationGuard],
    data: {
      roles: ['ROLE_USER', 'ROLE_MANAGER', 'ROLE_ADMIN', 'ROLE_SUPER_ADMIN']
    }
  },
  {
    path: 'update-password',
    loadChildren: () => import('./account/update-password/update-password.module').then( m => m.UpdatePasswordPageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./transact/payment/payment.module').then( m => m.PaymentPageModule)
  },
  {
    path: 'transfer',
    loadChildren: () => import('./transact/transfer/transfer.module').then( m => m.TransferPageModule)
  },
  {
    path: 'purchase',
    loadChildren: () => import('./transact/purchase/purchase.module').then( m => m.PurchasePageModule)
  },
  {
    path: 'withdraw',
    loadChildren: () => import('./transact/withdraw/withdraw.module').then( m => m.WithdrawPageModule)
  },
  {
    path: 'transaction-history',
    loadChildren: () => import('./transact/transaction-history/transaction-history.module').then( m => m.TransactionHistoryPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './common/services/authentication.guard';
import { AuthorizationGuard } from './common/services/authorization.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./account/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'dashboard',
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
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

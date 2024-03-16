import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { AuthenticationGuard } from '../common/services/authentication.guard';
import { AuthorizationGuard } from '../common/services/authorization.guard';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    canActivate: [AuthenticationGuard, AuthorizationGuard],
    data: {
      roles: ['ROLE_USER', 'ROLE_MANAGER', 'ROLE_ADMIN', 'ROLE_SUPER_ADMIN']
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule),
        canActivate: [AuthenticationGuard, AuthorizationGuard],
        data: {
          roles: ['ROLE_USER', 'ROLE_MANAGER', 'ROLE_ADMIN', 'ROLE_SUPER_ADMIN']
        }
      },
      {
        path: 'bank',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule),
        canActivate: [AuthenticationGuard, AuthorizationGuard],
        data: {
          roles: ['ROLE_USER', 'ROLE_MANAGER', 'ROLE_ADMIN', 'ROLE_SUPER_ADMIN']
        }
      },
      {
        path: 'messages',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule),
        canActivate: [AuthenticationGuard, AuthorizationGuard],
        data: {
          roles: ['ROLE_USER', 'ROLE_MANAGER', 'ROLE_ADMIN', 'ROLE_SUPER_ADMIN']
        }
      },
      {
        path: 'profile',
        loadChildren: () => import('../account/profile/profile.module').then(m => m.ProfilePageModule),
        canActivate: [AuthenticationGuard, AuthorizationGuard],
        data: {
          roles: ['ROLE_USER', 'ROLE_MANAGER', 'ROLE_ADMIN', 'ROLE_SUPER_ADMIN']
        }
      },
      {
        path: '',
        redirectTo: '/tabs/dashboard',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule { }

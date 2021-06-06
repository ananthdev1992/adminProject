import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { BankManagementComponent } from './bank-management/bank-management.component';
import { ProfileComponent } from './profile/profile.component';
import { CountryCurrencyComponent } from './country-currency/country-currency.component';
import { BranchManagementComponent } from './branch-management/branch-management.component';
import { BankbranchManagementComponent } from './bankbranch-management/bankbranch-management.component';
import { CommissionGroupComponent } from './commission-group/commission-group.component';
import { UserManagementComponent } from './user-management/user-management.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
    },
    {
      path: 'bank-management',
      component: BankManagementComponent,
    },
    {
      path: 'profile',
      component: ProfileComponent,
    },
    {
      path: 'country-currency',
      component: CountryCurrencyComponent,
    },
    {
      path: 'branch-management',
      component: BranchManagementComponent,
    },
    {
      path: 'bankbranch-management',
      component: BankbranchManagementComponent,
    },
    {
      path:'commission-group',
      component:CommissionGroupComponent,
    },
    {
      path:'user-management',
      component:UserManagementComponent,
    },
    {
      path: 'settings',
      loadChildren: () => import('./settings/settings.module')
        .then(m => m.SettingsModule),
    },
    {
      path: 'miscellaneous',
      loadChildren: () => import('./miscellaneous/miscellaneous.module')
        .then(m => m.MiscellaneousModule),
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}

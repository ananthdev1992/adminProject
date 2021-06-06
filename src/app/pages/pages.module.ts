import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { BankManagementModule } from './bank-management/bank-management.module';
import { ProfileModule } from './profile/profile.module';
import { CountryCurrencyModule } from './country-currency/country-currency.module';
import { BranchManagementModule } from './branch-management/branch-management.module';
import { BankbranchManagementModule } from './bankbranch-management/bankbranch-management.module';
import { CommissionGroupModule } from './commission-group/commission-group.module';
import { UserManagementModule } from './user-management/user-management.module';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    MiscellaneousModule,
    BankManagementModule,
    ProfileModule,
    CountryCurrencyModule,
    BranchManagementModule,
    BankbranchManagementModule,
    CommissionGroupModule,
    UserManagementModule,
  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {
}

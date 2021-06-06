import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsComponent } from './settings.component';
import { GeneralSettingsComponent } from './general-settings/general-settings.component';
import { EmailSettingsComponent } from './email-settings/email-settings.component';
import { SmsSettingsComponent } from './sms-settings/sms-settings.component';
import { WalletSettingsComponent } from './wallet-settings/wallet-settings.component';

const routes: Routes = [{
  path: '',
  component: SettingsComponent,
  children: [
    {
      path: 'general-settings',
      component: GeneralSettingsComponent,
    },
    {
      path: 'email-settings',
      component: EmailSettingsComponent,
    },
    {
      path: 'sms-settings',
      component: SmsSettingsComponent,
    },
    {
      path: 'wallet-settings',
      component: WalletSettingsComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsRoutingModule {
}

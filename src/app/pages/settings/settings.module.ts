import { NgModule } from '@angular/core';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule, NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule,
} from '@nebular/theme';

import { SettingsRoutingModule } from './settings-routing.module';
import { ThemeModule } from '../../@theme/theme.module';
import { FormsModule as ngFormsModule } from '@angular/forms';
import { SettingsComponent } from './settings.component';
import { GeneralSettingsComponent } from './general-settings/general-settings.component';
import { EmailSettingsComponent } from './email-settings/email-settings.component';
import { SmsSettingsComponent } from './sms-settings/sms-settings.component';
import { WalletSettingsComponent } from './wallet-settings/wallet-settings.component';



@NgModule({
  declarations: [SettingsComponent, GeneralSettingsComponent, EmailSettingsComponent, SmsSettingsComponent, WalletSettingsComponent],
  imports: [
    ThemeModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    NbSelectModule,
    NbIconModule,
    ngFormsModule,
    SettingsRoutingModule,
  ]
})
export class SettingsModule { }

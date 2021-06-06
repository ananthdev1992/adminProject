/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './@core/core.module';
import { ThemeModule } from './@theme/theme.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {
  NbChatModule,
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbSidebarModule,
  NbToastrModule,
  NbWindowModule,
} from '@nebular/theme';
import { NbAuthSimpleToken, NbAuthModule } from '@nebular/auth';
import { NbPasswordAuthStrategy } from '@nebular/auth';
import { AuthGuard } from './auth-guard.service';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbChatModule.forRoot({
      messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY',
    }),
    CoreModule.forRoot(),
    ThemeModule.forRoot(),
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'email',
          baseEndpoint: 'https://reqres.in/',
           login: {
             endpoint: 'api/login',
             method: 'post',
             //requireValidToken: false,
             redirect: {
              success: '/page/dashboard',
              failure: null, // stay on the same page
            },
           },
           register: {
             endpoint: 'api/register',
             method: 'post',
             //requireValidToken: false,
             redirect: {
              success: '/auth/login',
              failure: null, // stay on the same page
            },
           },
           logout: {
            endpoint: 'api/user/2',
            method: 'get',
            redirect: {
              success: '/auth/login',
              failure: null, // stay on the same page
            },
           },
            token: {
                key: 'token',
                class: NbAuthSimpleToken, //NbAuthJWTToken -> Use when we use JWT Token
            },
        }),
      ],
      forms: {},
    }),
  ],
  providers:[AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {
}

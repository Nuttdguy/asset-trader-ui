import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.routing';
import { AppComponent } from './app.component';

import { CoinComponent } from './coin/coin.component';
import { ValuesPipe } from './_pipes/values.pipe';

import { RegisterComponent } from './register/index';
import { LoginComponent } from './login/index';
import { HomeComponent } from './home/index';
import { AlertComponent } from './_directives/alert.component';
import { AuthGuard } from './_guards/auth.guard';
import { ChartsModule } from 'ng2-charts';
import { TradeComponent } from './account/trade/trade.component';

import { MarketComponent, 
  AccountDataComponent, 
  AccountInfoComponent, 
  AccountComponent } from './account/index';

import { AccountDataService, 
  FavoriteService, 
  AlertService, 
  AuthenticationService, 
  MarketInfoService, 
  UserService, 
  CoinService,
  SettingsService } from './_services/index';

import { ProfileComponent, 
  FavoriteComponent, 
  ApiexchangeComponent, 
  NetworkComponent, 
  PasswordComponent } from './home/index';


@NgModule({
  declarations: [
    AppComponent,
    CoinComponent,
    ValuesPipe,
    AccountComponent,
    AccountInfoComponent,
    AccountDataComponent,
    MarketComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    AlertComponent,
    ProfileComponent,
    FavoriteComponent,
    ApiexchangeComponent,
    NetworkComponent,
    PasswordComponent,
    TradeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ChartsModule
  ],
  providers: [
    CoinService,
    MarketInfoService,
    AccountDataService,
    AlertService,
    AuthenticationService,
    UserService,
    AuthGuard,
    FavoriteService,
    SettingsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

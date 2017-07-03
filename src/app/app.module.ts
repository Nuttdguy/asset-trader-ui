import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.routing';
import { AppComponent } from './app.component';

import { SignupFormComponent } from './signup-form/signup-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { CoinComponent } from './coin/coin.component';
import { CoinService } from './_services/coin.service';
import { ValuesPipe } from './_pipes/values.pipe';
import { AccountComponent } from './account/account.component';
import { AccountInfoComponent } from './account/account-info/account-info.component';
import { MarketComponent } from './market/market.component';
import { AccountDataService } from './_services/account-data.service';
import { AlertService } from './_services/alert.service';
import { AuthenticationService } from './_services/authentication.service';
import { MarketInfoService } from './_services/market-info.service';
import { UserService } from './_services/users.service';
import { AccountDataComponent } from './account/account-data/account-data.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AlertComponent } from './_directives/alert.component';
import { AuthGuard } from './_guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    LoginFormComponent,
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
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    CoinService, 
    MarketInfoService, 
    AccountDataService, 
    AlertService, 
    AuthenticationService, 
    UserService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

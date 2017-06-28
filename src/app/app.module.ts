import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';

import { AppComponent } from './app.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { TraderProfileComponent } from './trader-profile/trader-profile.component';
import { CoinComponent } from './coin/coin.component';
import { CoinService } from './services/coin.service';
import { ValuesPipe } from './pipes/values.pipe';
import { AccountComponent } from './account/account.component';
import { AccountInfoComponent } from './account/account-info/account-info.component';
import { AccountDataComponent } from './account/account-data/account-data.component';
import { MarketComponent } from './market/market.component';
import { MarketInfoService } from './services/market-info.service';

@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    LoginFormComponent,
    TraderProfileComponent,
    CoinComponent,
    ValuesPipe,
    AccountComponent,
    AccountInfoComponent,
    AccountDataComponent,
    MarketComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [CoinService, MarketInfoService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

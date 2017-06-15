import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { TraderProfileComponent } from './trader-profile/trader-profile.component';
import { CoinComponent } from './coin/coin.component';
import { CoinService } from './services/coin.service';
import { AccountSummaryComponent } from './account-summary/account-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    LoginFormComponent,
    TraderProfileComponent,
    CoinComponent,
    AccountSummaryComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [CoinService],
  bootstrap: [AppComponent]
})
export class AppModule { }

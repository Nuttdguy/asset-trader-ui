import { AccountResult } from '../_models/account-result.model';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AccountDataService {

  baseUrl = 'http://localhost:8080/trader/account';
  balances = '/balances';
  orderHistory = '/orderhistory';
  withdrawalHistory = '/withdrawalhistory';
  depositHistory = '/deposithistory'

  constructor(private http: Http) { }

  onGetAccountBalances(): Observable<AccountResult> {
    return this.http.get(this.baseUrl + this.balances).map(res => res.json() as AccountResult);
  }

  onGetAccountOrderHistory(marketName?: string): Observable<AccountResult> {
    if (marketName === undefined) {
      return this.http.get(this.baseUrl + this.orderHistory).map(res => res.json() as AccountResult);
    } else {
      return this.http.get(this.baseUrl + this.orderHistory + '/' + marketName).map(res => res.json() as AccountResult);
    }
  }

  onGetWithdrawalHistory(currency?: string): Observable<AccountResult> {
    if (currency === undefined) {
      return this.http.get(this.baseUrl + this.withdrawalHistory).map( res => res.json() as AccountResult);
    } else {
      return this.http.get(this.baseUrl + this.withdrawalHistory  + '/' +  currency).map( res => res.json() as AccountResult);
    }
  }
  
  onGetDepositHistory(currency?: string): Observable<AccountResult> {
    if (currency === undefined) {
      return this.http.get(this.baseUrl + this.depositHistory).map( res => res.json() as AccountResult);
    } else {
      return this.http.get(this.baseUrl + this.depositHistory + '/' + currency).map( res => res.json() as AccountResult);
    }
  }

}

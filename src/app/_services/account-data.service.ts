import { ResultWrapper } from '../_models/result-wrapper.model';
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

  onGetAccountBalances(): Observable<ResultWrapper> {
    return this.http.get(this.baseUrl + this.balances).map(res => res.json() );
  }

  onGetAccountOrderHistory(marketName?: string): Observable<ResultWrapper> {
    if (marketName === undefined) {
      return this.http.get(this.baseUrl + this.orderHistory).map(res => res.json());
    } else {
      return this.http.get(this.baseUrl + this.orderHistory + '/' + marketName).map(res => res.json());
    }
  }

  onGetWithdrawalHistory(currency?: string): Observable<ResultWrapper> {
    if (currency === undefined) {
      return this.http.get(this.baseUrl + this.withdrawalHistory).map( res => res.json());
    } else {
      return this.http.get(this.baseUrl + this.withdrawalHistory  + '/' +  currency).map( res => res.json());
    }
  }
  
  onGetDepositHistory(currency?: string): Observable<ResultWrapper> {
    if (currency === undefined) {
      return this.http.get(this.baseUrl + this.depositHistory).map( res => res.json() );
    } else {
      return this.http.get(this.baseUrl + this.depositHistory + '/' + currency).map( res => res.json());
    }
  }

}

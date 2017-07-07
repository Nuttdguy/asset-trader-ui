import { ResultWrapper } from '../_models/result-wrapper.model';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AccountDataService {

  baseAccountUrl = 'http://localhost:8080/trader/account';
  balances = '/balances';
  orderHistory = '/orderhistory';
  withdrawalHistory = '/withdrawalhistory';
  depositHistory = '/deposithistory';
  depositAddress = '/depositaddress';

  
  constructor(private http: Http) { }

  onGetAccountBalances(): Observable<ResultWrapper> {
    return this.http.post(this.baseAccountUrl + this.balances, this.getLocalUser() ).map(res => res.json() );
  }

  onGetAccountOrderHistory(marketName?: string): Observable<ResultWrapper> {
    let jsonObj = this.getLocalUser();
    jsonObj['market'] = marketName;
    
    return this.http.post(this.baseAccountUrl + this.orderHistory, jsonObj ).map(res => res.json());
  }

  onGetWithdrawalHistory(currency?: string): Observable<ResultWrapper> {
    let jsonObj = this.getLocalUser();
    jsonObj['currency'] = currency;
    
    return this.http.post(this.baseAccountUrl + this.withdrawalHistory, jsonObj ).map( res => res.json());
  }
  
  onGetDepositHistory(currency?: string): Observable<ResultWrapper> {
    let jsonObj = this.getLocalUser();
    jsonObj['currency'] = currency;
    
    return this.http.post(this.baseAccountUrl + this.depositHistory, jsonObj).map( res => res.json() );
  }
  
  onGetDepositAddress(currency?: string): Observable<ResultWrapper> {    
    return this.http.get(this.baseAccountUrl + this.depositHistory + '/' + currency).map( res => res.json() );
  }
  
  onGetPortfolioValue(btcPrice): Observable<ResultWrapper> {
    let jsonObj = this.getLocalUser();
    let id = jsonObj['id'];
    
    console.log('THIS IS BTC PRICE FROM ACCOUNT-DATA ' + btcPrice);
    
    return this.http.get(this.baseAccountUrl +  this.balances + '/' + btcPrice + '&' + id).map( res => res.json() );
  }

  // ============================================
  // PRIVATE METHODS
  // ============================================
  
  private getLocalUser(): JSON  {
    let user = localStorage.getItem('currentUser'); // GETS THE STRING VALUE OF KEY
    return JSON.parse(user); // CONVERTS INTO A JSON OBJECT
  }
  
  private findIndexOfKey(): any {
    
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      console.log(key);
      if (key === 'id') {
        return i;
      };
    }
    return -1;
  }
  
}

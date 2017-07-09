
import { BTCWrapper } from '../_models/btcwrapper';
import { ResultWrapper } from '../_models';
import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class MarketInfoService {
  
  // TODO -- ADD FEATURE TO SELECT EXCHANGE
  // TODO -- ADD METHOD TO GET TOTAL COUNT OF ALL TRANSACTIONS (BUY, SELL, BOTH)
  // TODO -- ADD METHDO TO GET TOTAL COMMISSIONS PAID FOR ALL TRANSACTIONS 
  
  baseUrl: string;  
  baseUrlCoinBase: string;

  constructor(private http: Http) {
    this.baseUrl = 'http://localhost:8080/trader/market/bittrex';
    this.baseUrlCoinBase = 'https://api.coinbase.com/v2/prices/spot?currency=USD';
   }
 
  onGetCoinMarketInfo( ): Observable<ResultWrapper> {
      return this.http.get(this.baseUrl).map( res => res.json() );
  }
  
  onGetCurrentBitcoinPrice(): Observable<BTCWrapper> {
    return this.http.get(this.baseUrlCoinBase).map( res => res.json() );
  }
  
}

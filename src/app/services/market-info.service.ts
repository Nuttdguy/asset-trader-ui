import { Injectable } from '@angular/core';
import { Http, Response, Request } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { MarketInfo } from '../market/market-info.model';

@Injectable()
export class MarketInfoService {
  
  baseUrl: string;
  marketInfoUrl: string;
  // TODO -- ADD ENDPOINT FOR MARKET-INFO
  // TODO -- ADD FEATURE TO SELECT EXCHANGE

  constructor(private http: Http) {
    this.baseUrl = 'http://localhost:8080/trader/market/bittrex';
   }
 
  onGetCoinMarketInfo( ): Observable<MarketInfo> {
      return this.http.get(this.baseUrl).map( res => res.json() as MarketInfo)
  }
  

}

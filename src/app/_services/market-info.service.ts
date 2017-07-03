import { ResultWrapper } from '../_models/result-wrapper.model';
import { Injectable } from '@angular/core';
import { Http, Response, Request } from '@angular/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class MarketInfoService {
  
  baseUrl: string;
  marketInfoUrl: string;
  // TODO -- ADD ENDPOINT FOR MARKET-INFO
  // TODO -- ADD FEATURE TO SELECT EXCHANGE

  constructor(private http: Http) {
    this.baseUrl = 'http://localhost:8080/trader/market/bittrex';
   }
 
  onGetCoinMarketInfo( ): Observable<ResultWrapper> {
      return this.http.get(this.baseUrl).map( res => res.json() )
  }
  

}

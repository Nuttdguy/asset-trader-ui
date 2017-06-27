import { Injectable, Inject } from '@angular/core';
import { Http, Response, Request } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Coin } from '../coin/coin.model';
import { OrderBook } from '../coin/orderbook.model';
import { Result } from '../coin/result.model';
import { CoinMarket } from '../coin/coin-market.model';


@Injectable()
export class CoinService {

  baseUrl: string;
  getMarkets = '/getmarkets';
  getCurrencies: '/getcurrencies';
  getMarketSummaries: '/getmarketsummaries';
  
  getTicker: '/getticker/';
  getMarketSummary: '/getmarketsummary/';
  getOrderBook: '/getorderbook/';
  getMarketHistory = '/getmarkethistory/'

  constructor(private http: Http) {
    this.baseUrl = 'http://localhost:8080/trader/coins';
  }
  
  onGetCoinMarket(): Observable<CoinMarket> {
    return this.http.get(this.baseUrl + this.getMarkets).map(res => res.json() );
  }

  onGetCurrencies(): Observable<Result> {
    return this.http.get(this.baseUrl + this.getCurrencies).map(res => res.json() as Result);
  }

  onGetMarketSummaries(): Observable<Result> {
    return this.http.get(this.baseUrl + this.getMarketSummaries).map(res => res.json() as Result);
  }


  onGetTicker(marketName: string): Observable<OrderBook> {
    return this.http.get(this.baseUrl + this.getTicker + marketName).map(res => res.json() as OrderBook);
  }

  onGetMarketSummary(marketName: string): Observable<Result> {
    return this.http.get(this.baseUrl + this.getMarketSummary + marketName).map(res => res.json() as Result);
  }

  onGetOrderBook(marketName: string, actionType: string, depth: string): Observable<OrderBook> {
    return this.http.get(this.baseUrl + this.getOrderBook + marketName + '&' + actionType).map(res => res.json() as OrderBook);
  }
  
  onGetMarketHistory(marketName: string): Observable<Result> {
    return this.http.get(this.baseUrl + this.getMarketHistory + marketName).map( res => res.json() as Result)
  }

}
















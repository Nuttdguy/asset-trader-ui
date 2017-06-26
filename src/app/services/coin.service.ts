import { Injectable, Inject } from '@angular/core';
import { Http, Response, Request } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Coin } from '../coin/coin.model';
import { OrderBook } from '../coin/orderbook.model';
import { Result } from '../coin/result.model';

@Injectable()
export class CoinService {

  http: Http;
  baseUrl: string;
  getMarkets: string;
  getCurrencies: string;
  getTicker: string;
  getMarketSummaries: string;
  getMarketSummary: string;
  getOrderBook: string;


  constructor(http: Http) {
    this.http = http;

    this.baseUrl = 'http://localhost:8080/trader/coins';

    // Change service to get results from database
    this.getMarkets = '/getmarkets';

    this.getCurrencies = '/getcurrencies';
    this.getMarketSummaries = '/getmarketsummaries';

    // requires parameters
    this.getTicker = '/getticker/';
    this.getMarketSummary = '/getmarketsummary/';
    this.getOrderBook = '/getorderbook/';


  }
  
  onGetCoinMarket(): Observable<Result> {
    const params = {};
    const k = this.http.get(this.baseUrl + this.getMarkets).map(res => res.json() as Result);
    return k;
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


}
















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
    
    this.baseUrl = 'https://bittrex.com/api/v1.1/';
    this.getMarkets = 'public/getmarkets';
    this.getCurrencies = 'public/getcurrencies';   
    this.getMarketSummaries = 'public/getmarketsummaries';
    
    // requires parameters
    this.getTicker = 'public/getticker';
    this.getMarketSummary = 'public/getmarketsummary';
    this.getOrderBook = 'public/getorderbook';
  }
  
  onGetMarket(): Observable<Coin> {
    const params = {};
    const k =  this.http.get(this.baseUrl + this.getMarkets ).map(res => res.json() as Coin);
    return k;
  }
  
  onGetCurrencies(): Observable<Coin> {
    return this.http.get(this.baseUrl + this.getCurrencies).map(res => res.json() as Coin);
  }
  
  onGetMarketSummaries(): Observable<Coin> {
    return this.http.get(this.baseUrl + this.getMarketSummaries).map(res => res.json() as Coin);
  }
  
  
  onGetTicker(marketName: string): Observable<OrderBook> {
    return this.http.get(this.baseUrl + this.getTicker + '?market=' + marketName).map(res => res.json() as OrderBook);
  }
  
  onGetMarketSummary(marketName: string): Observable<Coin> {
    return this.http.get(this.baseUrl + this.getMarketSummary + '?market=' + marketName).map(res => res.json() as Coin);
  }
  
  onGetOrderBook(marketName: string, actionType: string, depth: string): Observable<Coin> {
    return this.http.get(this.baseUrl + this.getOrderBook
            + '?market='+ marketName
            + '&type='  + actionType
            + '&depth=' + depth).map(res => res.json() as Coin);
  }
  

}
















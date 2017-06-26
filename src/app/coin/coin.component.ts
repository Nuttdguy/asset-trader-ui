import { Component, OnInit, Input, PipeTransform, Pipe } from '@angular/core';

import { Coin } from './coin.model';
import { CoinService } from '../services/coin.service';
import { OrderBook } from './orderbook.model';
import { Result } from './result.model';


@Component({
  selector: 'app-coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.css'],
})

export class CoinComponent implements OnInit {

  apiCalled: string;
  coin: Coin;
  result: Result;
  orderBook: OrderBook;
  valueArr = [];
  marketName: '';
  actionType: 'buy';
  depth: '';

  constructor(private coinService: CoinService) { }

  ngOnInit() {
    this.coin = null; // SET NULL BY DEFAULT
    this.orderBook = null; // SET NULL BY DEFAULT
    this.result = null;
    this.apiCalled = '';

  }

  onGetCoinMarket() {
    this.apiCalled = 'onGetCoinMarket';
    this.coinService
      .onGetCoinMarket()
      .subscribe(data => {
        this.result = data;
        console.log('this is the coin')
        // console.log(this.result);
      },
      error => {
        console.log('This is an error');
        console.log(error);
      });

  }

  onGetCurrencies() {
    this.apiCalled = 'onGetCurrencies';
    this.coinService
      .onGetCurrencies()
      .subscribe(data => {
        this.result = data;
        console.log('this is a currencies service');
        console.log(data);
      },
      error => {
        console.log('there was an error');
        console.log(error);
      });

  }


  onGetMarketSummaries() {
    this.apiCalled = 'onGetMarketSummaries';
    this.coinService
      .onGetMarketSummaries()
      .subscribe(data => {
        this.result = data;
        console.log('this is get market summaries service');
        console.log(data);
      },
      error => {
        console.log('there is an error in get market summaries service');
        console.log(error);
      });
  }


  // USE ORDER-BOOK-MODEL TO GETA SINGLE RESULT
  onGetTicker() {
    console.log(this.marketName);
    this.apiCalled = 'onGetTicker';
    this.coinService
      .onGetTicker(this.marketName)
      .subscribe(data => {
        this.orderBook = data;
        console.log('this is get ticker service');
        // console.log(this.orderBook);
      },
      error => {
        console.log('this is an error from ticker service');
        console.log(error);
      });
  }

  onGetMarketSummary() {
    this.apiCalled = 'onGetMarketSummary';
    this.coinService
      .onGetMarketSummary(this.marketName)
      .subscribe(data => {
        this.result = data;
        console.log('this is get market summary');
        console.log(data);
      },
      error => {
        console.log('this is an error from get market summary');
        console.log(error);
      });

  }

  onGetOrderBook() {
    this.apiCalled = 'onGetOrderBook';
    this.coinService
      .onGetOrderBook(this.marketName.toLowerCase(), this.actionType.toLowerCase(), this.depth)
      .subscribe(data => {
        this.orderBook = data;
        console.log('this is order book service');
        // console.log(data);
      },
      error => {
        console.log('this is an error from book service');
        console.log(error);
      });


  }


}

















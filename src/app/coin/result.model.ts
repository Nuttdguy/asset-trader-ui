

import { Buy } from './buy.model';
import { Sell } from './sell.model';


export class Result {
  
  // getmarkets()
  BaseCurrency: string;
  BaseCurrencyLong: string;
  MarketCurrency: string;
  MarketCurrencyLong: string;
  MarketName: string;
  MinTradeSize: number; 
  LogoUrl: string;
  Notice: string;
  IsSponsored: boolean;
  
  // getcurrencies()  
  Currency: string;
  CurrencyLong: string;
  MinConfirmation: number;
  TxFee: number;
  IsActive: boolean;
  CoinType: string; 
  BaseAddress: string;
  
  // getticker()
  Bid: number;
  Ask: number;
  Last: number;
  
  // getmarketsummaries()
  High: number;
  Low: number;
  Volume: number;
  BaseVolume: number;
  TimeStamp: Date;
  OpenBuyOrders: number;
  OpenSellOrders: number;
  PrevDay: number;
  Created: Date;
  
  // getorderbook()
  Quantity: number;
  Rate: number;
  buy: Buy[];
  sell: Sell[];
  
  
  // getmarkethistory()
  Id: number;
  Price: number;
  Total: number;
  FillType: string;
  OrderType: string;
  
  // market/buylimit()
  
  // market/selllimit()
  
  // market/cancel()
  
  // market/getopenorders()
  
  // account/getbalances()
  
  // account/getbalance()
  
  // account/getdepositaddress()
  
  // account/withdraw()
  
  // account/getorder()
  
  // account/getorderhistory()
  
  // account/getwithdrawalhistory()
  
  // account/getdeposithistory()
  
  
}













import { Buy } from './buy.model';
import { Sell } from './sell.model';


export class CoinMarket {
  
    // getmarkets()
  baseCurrency: string;
  baseCurrencyLong: string;
  marketCurrency: string;
  marketCurrencyLong: string;
  marketName: string;
  minTradeSize: number; 
  logoUrl: string;
  notice: string;
  isSponsored: boolean;
  
  // getcurrencies()  
  currency: string;
  currencyLong: string;
  minConfirmation: number;
  txFee: number;
  isActive: Boolean;
  coinType: string; 
  baseAddress: string;
  
  // getticker()
  bid: number;
  ask: number;
  last: number;
  
  // getmarketsummaries()
  high: number;
  low: number;
  volume: number;
  baseVolume: number;
  timeStamp: Date;
  openBuyOrders: number;
  openSellOrders: number;
  prevDay: number;
  created: Date;
  
  // getorderbook()
  quantity: number;
  rate: number;
  buy: Buy[];
  sell: Sell[];
  
  
  // getmarkethistory()
  id: number;
  price: number;
  total: number;
  fillType: string;
  orderType: string;
  
}

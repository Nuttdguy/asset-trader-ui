import { Coin } from './coin.model';
import { Result } from './result.model';

export class OrderBook {
  
  success: string;
  message: string;
  
  coin: Coin;
  rate: number;
  orderBookDateTime: number;
  quantity: number;
  orderType: string;
  
  bid: number;
  ask: number;
  last: number;
  
}

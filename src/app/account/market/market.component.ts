
import { ResultWrapper } from '../../_models/result-wrapper.model';
import { MarketInfoService, CoinService } from '../../_services/index';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
  

export class MarketComponent implements OnInit {

  marketInfo: ResultWrapper;
  
  marketInfoOptions = [
    {id: '1', param: 'marketName', display: 'Market Name', checked:false},
    {id: '2', param: 'marketCLong', display: 'Market C.Long', checked:false},
    {id: '3', param: 'marketCurrency', display: 'Market Currency', checked:false},
    {id: '4', param: 'volume', display: 'Volume', checked:false},
    {id: '5', param: 'price', display: 'Price', checked:false},
    {id: '6', param: 'buyOrders', display: 'Buy Orders', checked:false},
    {id: '7', param: 'sellOrders', display: 'Sell Orders', checked:false},
    {id: '8', param: 'changePercent', display: 'Change (%)', checked:false},
    {id: '9', param: 'high', display: 'High', checked:false},
    {id: '10', param: 'low', display: 'Low', checked:false},
    {id: '11', param: 'last', display: 'Last', checked:false}        
  ]
  
  constructor(private marketInfoService: MarketInfoService) { }

  ngOnInit() {
    this.onGetCoinMarketInfo();
  }
  
  
  onGetCoinMarketInfo() {

    console.log('Request started ... ')
    this.marketInfoService
      .onGetCoinMarketInfo()
      .subscribe( data => {
        this.marketInfo = data;
        console.log('this is marketInfo')
        // console.log(data);
      },
      error => {
        console.log('This is an error');
        console.log(error);
      }); 
    
  }  

}

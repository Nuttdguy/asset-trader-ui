
import { ResultWrapper, RwFavorite, Users } from '../../_models/index';
import { MarketInfoService, CoinService, FavoriteService, AlertService } from '../../_services/index';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
  

export class MarketComponent implements OnInit {

  marketInfo: ResultWrapper;
  wrapper: any[];

  constructor(
    private marketInfoService: MarketInfoService,
    private favoriteService: FavoriteService,
    private alertService: AlertService) { 

  }

  ngOnInit() {
    this.onGetCoinMarketInfo();
  }
  
  onGetCoinMarketInfo() {

    console.log('Request started ... ')
    this.marketInfoService
      .onGetCoinMarketInfo()
      .subscribe( data => {
        
        this.marketInfo = data;
        console.log('THIS IS FROM MARKET; GETTING SIDE-BAR DATA')
      },
      error => {
        console.log('THIS IS AN ERROR FROM MARKET; SIDEBAR');
        console.log(error);
      }); 
  }  
  
  onSaveFavorite(coinId: number, marketName: string) {
    console.log('ADDING AS FAVORITE')
    
    let user = localStorage.getItem('currentUser'); // GETS THE STRING VALUE OF KEY
    console.log(user);
    
    let persistUser = JSON.parse(user); // CONVERTS INTO A JSON OBJECT
    console.log(persistUser); 
    
    let tempKey = 'coinId';
    let tempVal = coinId;   
    persistUser[tempKey] = coinId; // APPEND COIN-ID TO JSON OBJECT
    
    this.favoriteService
      .onSaveCoinAsFavorite(persistUser)
      .subscribe( data => { 
        this.alertService.success(marketName + ' added as favorite coin');
        setTimeout( () => { this.alertService.clearMessage() }, 3000);
        this.wrapper = data;
      },
      error => {
        console.log('THIS IS AN ERROR FROM MARKET-COMPONENT');
        console.log(error);
      })
  }

  
    
//  marketInfoOptions = [
//    {id: '1', param: 'marketName', display: 'Market Name', checked:false},
//    {id: '2', param: 'marketCLong', display: 'Market C.Long', checked:false},
//    {id: '3', param: 'marketCurrency', display: 'Market Currency', checked:false},
//    {id: '4', param: 'volume', display: 'Volume', checked:false},
//    {id: '5', param: 'price', display: 'Price', checked:false},
//    {id: '6', param: 'buyOrders', display: 'Buy Orders', checked:false},
//    {id: '7', param: 'sellOrders', display: 'Sell Orders', checked:false},
//    {id: '8', param: 'changePercent', display: 'Change (%)', checked:false},
//    {id: '9', param: 'high', display: 'High', checked:false},
//    {id: '10', param: 'low', display: 'Low', checked:false},
//    {id: '11', param: 'last', display: 'Last', checked:false}        
//  ]
  
}
